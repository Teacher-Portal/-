
var footer = `
        <footer style="background-color: var(--lighter-color); width: 100%; float: left; padding: 0 0 0 0;">
            <div class="randombox">
                <ul style=" gap: 5rem; list-style: none; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    <li id="randommessage" style="color: var(--offset-color);">Test</li>
                </ul>
            </div>
            <hr>
            <ul style="display: flex; gap: 5rem; list-style: none;">
                <li style="color: var(--accent-color);">Creator/Founder: Grin/FV</li>
                <li style="color: var(--accent-color);">Email Us: Xenapsis@gmail.com</li>
                <li style="color: var(--accent-color);">Version 2.8.8</li>
            </ul>
        </footer>`;

        document.querySelector("#footerthing").insertAdjacentHTML("beforeend", footer)
