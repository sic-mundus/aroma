<template>
<div class="col-12 col-sm-auto" style="min-width:375px">
    <div class="column justify-center full-height fit">

        <q-card class="shadow-24 col-12 col-sm-auto">
            <q-card-section class="bg-primary text-center">
                <h4 class="text-h3 text-white q-my-md pacifico-font text-lowercase">Aroma</h4>
                <div v-if="type === 'sign-in'" class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index:100">
                    <q-btn @click="type = 'sign-up'" fab class="shadow-4" icon="mdi-account-plus" color="accent">
                        <q-tooltip content-class="bg-accent" content-style="font-size: 16px">
                            Registra un nuovo account
                        </q-tooltip>
                    </q-btn>
                </div>
            </q-card-section>

            <q-card-section style="z-index:-1">

                <q-form ref="form" class="q-px-sm q-pt-xl" @submit="letsParty">

                    <transition-expand>
                        <p class="text-center text-body2" v-if="type === 'forgot-password'">Inserisci la tua e-mail. Ti invieremo un link per reimpostare la password</p>
                    </transition-expand>

                    <q-input square bottom-slots :rules="rules.email" v-model="form.email" type="email" label="Email" autocomplete="email">
                        <template v-slot:before>
                            <q-icon name="email" />
                        </template>
                    </q-input>

                    <transition-expand>
                        <q-input v-if="type === 'sign-up'" square bottom-slots :rules="rules.username" v-model="form.username" type="text" label="Username">
                            <template v-slot:before>
                                <q-icon name="mdi-account" />
                            </template>
                        </q-input>
                    </transition-expand>

                    <transition-expand>
                        <q-input v-if="type === 'sign-in' || type === 'sign-up'" square bottom-slots :rules="rules.password" v-model="form.password" type="password" label="Password" autocomplete="new-password">
                            <template v-slot:before>
                                <q-icon name="lock" />
                            </template>
                        </q-input>
                    </transition-expand>

                    <!--Button-->
                    <q-card-actions class="q-px-lg q-mt-md">
                        <q-btn type="submit" unelevated size="lg" color="accent" class="full-width text-white" :label="btnMessage" :loading="busy" />
                    </q-card-actions>

                    <!--Sign in instead-->
                    <q-card-section class="text-center">
                        <q-btn v-if="type === 'sign-up'" no-caps flat @click="type = 'sign-in'" class="text-grey-6 text-body2 tetx-weight-regular">Hai già un account? Accedi!
                        </q-btn>
                        <q-btn v-else-if="type === 'sign-in'" no-caps flat @click="type = 'forgot-password'" class="text-grey-6 text-body2 tetx-weight-regular">Hai dimenticato la password?
                        </q-btn>
                        <q-btn v-else-if="type === 'forgot-password'" no-caps flat @click="type = 'sign-in'" class="text-grey-6 text-body2 tetx-weight-regular">Indietro
                        </q-btn>
                    </q-card-section>

                </q-form>

            </q-card-section>

        </q-card>

    </div>

</div>
</template>

<script>
import TransitionExpand from 'components/TransitionExpand'
export default {
    components: {
        TransitionExpand
    },
    data() {
        return {
            type: 'sign-in',
            busy: false,
            form: {
                email: '',
                username: '',
                password: ''
            },
            rules: {
                email: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                username: [
                    v => !!v || 'Username is required',
                    v =>
                    v.length >= 6 ||
                    'Username must be greater than 6 characters'
                ],
                password: [
                    v => !!v || 'Password is required',
                    v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
                ]
            }
        }
    },
    computed: {
        btnMessage() {
            if (this.type === 'sign-in') {
                return 'Accedi'
            } else if (this.type === 'sign-up') {
                return 'Registrati'
            } else if (this.type === 'forgot-password') {
                return 'Invia'
            }
            return ''
        }
    },
    watch: {
        type() {
            this.form.password = ''
            this.$refs.form.resetValidation()
        }
    },
    mounted() {},
    methods: {
        letsParty() {
            if (this.type === 'sign-in') {
                this.signIn()
            } else if (this.type === 'sign-up') {
                this.signUp()
            } else if (this.type === 'forgot-password') {
                this.recovery()
            }
        },

        signIn() {
            if (this.$refs.form.validate()) {
                this.busy = true
                let email = this.form.email;
                let password = this.form.password;

                this.$signIn(email, password)
                .then(user => {
                        this.busy = false
                })
                .catch(error => {
                    this.$q.notify({
                        color: 'negative',
                        icon: 'announcement',
                        message: error.message
                    })
                    console.error(`Not signed in: ${error.message}`)
                    this.busy = false
                })
            }
        },
        signUp() {
            if (this.$refs.form.validate()) {
                this.busy = true
                let email = this.form.email;
                let password = this.form.password;

                this.$signUp(email, password)
                    .then(user => {
                        this.busy = false
                    })
                    .catch(error => {
                        this.$q.notify({
                            color: 'negative',
                            icon: 'announcement',
                            message: error.message
                        })
                        console.error(`Not signed in: ${error.message}`)

                        this.busy = false
                    })
            }
        },
        recovery() {
            if (this.$refs.form.validate()) {
                this.busy = true
                let credentials = {
                    email: this.form.email
                }

                this.$recoveryPassword
                    .then(() => {
                        this.$q.notify('E\' stata inviata un e-mail all\'indirizzo indicato, con la quale è possibile reimpostare la password.')

                        this.busy = false

                        this.type = 'sign-in'
                    })
                    .catch(error => {
                        this.$q.notify({
                            color: 'negative',
                            icon: 'announcement',
                            message: error.message
                        })
                        console.error(`Not signed in: ${error.message}`)

                        this.busy = false
                    })
            }
        }
    }
}
</script>

<style>
</style>
