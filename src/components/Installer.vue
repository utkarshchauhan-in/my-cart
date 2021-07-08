<template>
    <div class="installer">
        <span>Add MyCart to your HomeScreen!</span>
        <button class="yes" @click="installApp">Yes!</button>
        <button class="no" @click="close">Not Now</button>
    </div>
</template>

<script>
export default {
    name: "Installer",
    props: { installPrompt: null },
    methods: {
        installApp(){
            this.installPrompt.prompt();
            this.installPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
            } else {
            console.log('User dismissed the A2HS prompt');
            }
            this.close();
            });
        },
        close(){
            this.$emit('close');
        }
    }
}
</script>