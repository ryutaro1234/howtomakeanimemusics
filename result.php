
  <div id="container">
    <main>
      <section class="result_contents">
        <h2>検索結果</h2>
        <ul id="result">

        </ul>
      </section>

      <script>
        let v = new URLSearchParams(window.location.search);
        v = v.get('search-key');
        const urlLists = [
          "",
        ];

        $.each(urlLists, function(i){
          $.ajax({
            url : urlLists[i],
            dataType : 'html',
            success : function(data){

              if( $(data).find("main").text().indexOf(v) !== -1){

                $('<li><a href="' + urlLists[i] + '">' +$(data).find(".search-style").text() + '</a></li>').appendTo('#result');
              }
            },

            error: function(data){
              console.log("error")
            }
          });
        });
      </script>
    </main>
  </div>
