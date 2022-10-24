<?php
  $title = 'My Site Top';
  $description = '説明（トップページ）';
  $is_home = true;
  include("./inc/head.php");
?>
</head>
<body>
<div class="wrapper">
  <?php include("./inc/header.php"); ?>
  <div class="container">
    <main>
      <section>
        <h2 class="search-key">Top page</h2>
        <p> <img src="/images/sample_01.jpg" width="600" height="400" alt=""> Lorem ipsum dolor sit amet,... </p>
      </section>
      <section>
        <h3>Heading</h3>
        <p>Repellat nihil unde commodi soluta dignissimos dicta...</p>
        <p><?php echo "string"; ?></p>
      </section>
    </main>
  </div>
</div>
<?php include("./inc/footer.php"); ?>
</body>
</html>
