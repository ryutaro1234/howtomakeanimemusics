<header>
  <div class="container">
    <a <?php echo isset($is_home) ? '': 'href="index.php"' ?>>
      <img class="logo" src="/images/logo.svg" width="141" height="36" alt="logo">
      <h1>DEMO</h1>
    </a>
  </div>

  <div id="nav">
    <span id="nav_toggle" onclick="nav_toggle()">
      <i></i>
      <i></i>
      <i></i>
    </span>
  </div>

  <nav id="navigation">
    <ul class="nav_menu_ul">
      <li class="nav_menu_li"><a class="links-nav border-gray" href="/">トップ</a></li>
      <li class="nav_menu_li"><a class="links-nav border-gray" href="/composition/">作曲</a></li>
      <li class="nav_menu_li"><a class="links-nav border-gray" href="/arrangement/">編曲</a></li>

      <form action="/result" autocomplete="on" method="get">
        <div class="search nav_menu_li">
          <input type="text" name="search-key" class="search__input" placeholder="Search...">
          <div class="search__icon">
            <ion-icon name="search"><img src="/images/search.png" /></ion-icon>
          </div>
        </div>
      </form>
    </ul>
  </nav>
</header>
