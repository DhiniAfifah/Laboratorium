const navbarHTML = `
    <nav>
        <div class="logo">
            <i class="fas fa-flask" style="color: #3498db; font-size: 1.5rem;"></i>
            <span>Teknologi Farmasi UNSRI</span>
        </div>
        
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Layanan Laboratorium</a></li>
            <li>
                <a href="farmasetika.html">Lab Farmasetika <i class="fas fa-chevron-down dropdown-icon"></i></a>
                <ul class="dropdown">
                    <li><a href="farmasetika.html">Daftar Alat Lab</a></li>
                    <li><a href="farmasetika.html">Daftar Bahan Lab</a></li>
                </ul>
            </li>
            <li>
                <a href="tekfar.html">Lab TekFar <i class="fas fa-chevron-down dropdown-icon"></i></a>
                <ul class="dropdown">
                    <li><a href="tekfar.html">Daftar Alat Lab</a></li>
                    <li><a href="tekfar.html">Daftar Bahan Lab</a></li>
                </ul>
            </li>
            <li><a href="#">Lab Virtual</a></li>
            <li><a href="#">Katalog</a></li>
            <li><a href="#">Struktur Organisasi</a></li>
            <li><a href="#">SOP</a></li>
            <li><a href="#">Lembar Kerja Praktikum</a></li>
        </ul>

        <div class="menu-toggle" id="mobile-menu">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
    <div class="nav-overlay" id="nav-overlay"></div>

`;

document.getElementById('navbar-container').innerHTML = navbarHTML;
