const navelement = document.getElementById("navbarr2rs")

var navbar = `
<nav>
    <ul class="navcontainer">
            <img src="imgs/favicon.png" style=" width:50px; height: 50px;">
            <h1 class="name">Xenapsis</h1>
            <li class="navlist" style="height: 15%;"><a href="index"><button class="navbutton">Home</button></a></li>
            <li class="navlist" style="height: 15%;"><a href="games"><button class="navbutton">Games</button></a></li>
            <li class="navlist" style="height: 15%;"><a href="apps"><button class="navbutton">Apps/Shows</button></a></li>
            <li class="navlist" style="height: 15%;"><button class="navbutton">Socials</button></li>
            <li class="navlist" style="height: 15%;"><a href="settings"><button class="navbutton">Options</button></a></li>
            <li class="navlist" style="height: 15%;"><a href="updates"><button class="navbutton">Updates</button></a></li>
    </ul>
</nav>
`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", navbar)


//it will work trust 💯, ts dont work why are my ball itchy

