<template>
    <nav>
        <div class="nav-bar">
            <i class="bx bx-menu sidebarOpen"></i>
            <span class="logo navLogo"><nuxt-link to="/">CompuPost</nuxt-link></span>

            <div class="menu">
                <div class="logo-toggle">
                    <span class="logo"><nuxt-link to="/">CompuPost</nuxt-link></span>
                    <i class="bx bx-x siderbarClose"></i>
                </div>

                <ul class="nav-links">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/Blog">Blog</nuxt-link></li>
                    <li><nuxt-link to="/Contacto">Contacto</nuxt-link></li>
                </ul>
            </div>

            <div class="darkLight-searchBox">
                <div class="dark-light">
                    <i class="bx bx-moon moon"></i>
                    <i class="bx bx-sun sun"></i>
                </div>

                <div class="searchBox">
                    <div class="searchToggle">
                        <i class="bx bx-x cancel"></i>
                        <i class="bx bx-search search"></i>
                    </div>

                    <div class="search-field">
                        <input type="text" placeholder="Search..." />
                        <i class="bx bx-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped></style>
