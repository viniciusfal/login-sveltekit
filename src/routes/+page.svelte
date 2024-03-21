<script lang="ts">
  import bcrypt from 'bcryptjs'
	import type { User } from "./+page"; 
  
  let password = ''
  let email = ''

  export let data: User
  async function handleLogin() {
    const doesPasswordMatches = await bcrypt.compare(password, data.user.password )

    if(doesPasswordMatches && data.user.email === email) {
      window.location.href = '/perfil'
    } else {
      window.alert( 'Credentials invalid')
      email = ''  
      password = ''
    }
  }
</script>
<main class="flex flex-col items-center m-24 gap-2">
  <strong class="mb-4 text-3xl">Faça Login:</strong>
  <input type="text" placeholder="E-mail" 
    class="input input-bordered input-secondary w-full max-w-xs" id="email" bind:value={email}/>

  <input type="password" placeholder="Password" 
    class="input input-bordered input-secondary w-full max-w-xs" id="pass" bind:value={password}  /> 

  <button class="btn btn-outline btn-accent m-2 w-full max-w-xs" id="login-sucessful"  on:click|preventDefault={() =>  handleLogin()} >Login</button>    
</main>

