<template>
<div class="col-12 col-sm-12 col-md-auto">
    <div class="column justify-center full-height fit">

        <q-card class="shadow-24 col-12 col-sm-12 col-md-auto">
            <q-card-section class="bg-primary text-center">
                <h4 class="text-h3 text-white q-my-md pacifico-font text-lowercase">Aroma</h4>
            </q-card-section>

            <q-card-section>

                <q-form ref="form" class="q-pa-lg" @submit="save">

                    <div class="row">
                        <div class="column col-sm-12 col-md-auto q-pa-lg items-center justify-center text-center" style="min-width:200px">

                            <div style="width: 200px; height: 200px" class="q-mx-auto">
                            <q-img :ratio="1" 
                            class="myImage"
                            :img-style="{'border-radius': '50%' }" 
                            @click="$refs.my_file_picker.$el.click()"
                            spinner-color="primary" :src="dynamicPicUrl"/>
                            </div>

                            <q-file
                            ref="my_file_picker"
                            class="q-mt-lg"
                            v-model="image.model"
                            label="Choose image"
                            filled
                            @input="imageChanged"
                            style="max-width: 300px; display:none"
                            />
                        </div>
                        <div class="column col-sm-12 col-md-auto q-ml-lg" style="min-width:480px">
                            <q-input square filled bottom-slots :rules="rules.fullName" v-model="form.fullName" type="text" label="Your name">
                                <template v-slot:before>
                                    <q-icon name="mdi-tag" />
                                </template>
                            </q-input>

                            <q-input class="q-mt-md" square filled bottom-slots :rules="rules.bio" v-model="form.bio" type="textarea" label="Your bio in a few words">
                                <template v-slot:before>
                                    <q-icon name="mdi-book" />
                                </template>
                            </q-input>

                            <q-select class="q-mt-md" square filled bottom-slots="" v-model="form.lang" :options="langs" label="Language">
                                <template v-slot:before>
                                <q-icon name="mdi-flag" />
                            </template>
                            </q-select>

                            <!--Button-->
                            <q-card-actions class="q-px-lg q-mt-md">
                                <q-btn type="submit" unelevated size="lg" color="accent" class="full-width text-white" :label="'SAVE'" :loading="busy" />
                            </q-card-actions>
                        </div>

                    
                    </div>

                </q-form>

            </q-card-section>

        </q-card>

    </div>

</div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            busy: false,
            image: {
                model: null,
                file: null,
                previewUrl: null
            },
            uploadValue: 0,
            form: {
                fullName: '',
                bio: '',
                lang: 'en-us',
                picUrl: ''
            },
            rules: {
                fullName: [
                    v => !!v || 'This is required. Not happy with it? Just input a fake name and move on',
                    v => v.length >= 2 || 'A little too short..'
                ],
                bio: [
                    v => v.length <= 200 || 'A little too long..'
                ],
            }
        }
    },
    computed: {
        langs() {
            return  [
                'en-us',
                'it-it'
            ]
        },

        dynamicPicUrl() {
            if (this.image.previewUrl)
                return this.image.previewUrl;

            return 'https://avatar.oxro.io/avatar.svg?name=' + this.form.fullName.replace(' ','+') + '&caps=3&bold=true'
        }
    },
    mounted() {
    },
    methods: {
        save() {

            if (this.$refs.form.validate()) {

                this.busy = true;

                this.uploadImage().then(() => {
                
                    // Cloning user from vuex
                    let user = this.$store.getters['auth/me']

                    if (!user) {
                        console.warn('This is embarassing. Maybe caused by a refresh')
                        this.$router.push({ name: 'challenge' });
                    } else {
                        let me = {};
                        Object.assign(me, user);

                        me['fullName'] = this.form.fullName;
                        me['bio'] = this.form.bio;
                        me['lang'] = this.form.lang;
                        me['picUrl'] = this.form.picUrl;
                        me['hasSettings'] = true;

                        console.log('Ready to write anagraphic', me)

                        // Write settings to firestore 
                        this.$db
                        .collection('dudes')
                        .doc(me.userId)
                        .set(me, { merge: true })
                        .then(() => {

                            console.log('anagraphic updated in firestore')

                            // Commit to vuex
                            this.$store.commit('auth/SET_ME', me);
                            console.log('committed to store');

                            this.busy = false;

                            this.$router.replace({ name: 'home' }).catch(() => {})
                        })
                    }

                })

            }
        },
        imageChanged(val) {
            console.log('image changed', val)
            this.image.file = val;
            this.image.previewUrl = URL.createObjectURL(val);
        },
        uploadImage() {

            return new Promise((resolve, reject) => {

                if (!this.image.file) {
                    // Nessuna immagine
                    resolve()
                } else {
                    
                    console.log('OK, time to upload..');

                    // Naming the image like the user's uid
                    let uid = this.$store.getters['auth/me'].userId;

                    // Create a reference
                    var storageRef = this.$st.ref();
                    var imgRef = storageRef.child('images/profiles/'+ uid +'.jpg');
                    var uploadTask = imgRef.put(this.image.file);

                    let self = this;

                    // Register three observers:
                    // 1. 'state_changed' observer, called any time the state changes
                    // 2. Error observer, called on failure
                    // 3. Completion observer, called on successful completion
                    uploadTask.on('state_changed', function(snapshot){
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        self.uploadValue = progress;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                        break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                        break;
                        }
                    }, function(error) {
                        // Handle unsuccessful uploads
                        reject(error)
                    }, function() {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at', downloadURL);

                            self.form.picUrl = downloadURL;
                            resolve();
                        });
                    });

                }

            })
        }
    }
}
</script>

<style lang="scss" scoped>
.myImage:hover {
    cursor: pointer;
}
</style>