function check(){
  const posts = document.querySelectorAll(".post");
  posts.forEach(function(post){
    if (post.getAttribute("data-load") != null){  //①まだ処理前。ポストのデータが空なので読み込まれない。③if文に戻りポストが空で無いの次に移る
      return null;   //④return文により処理が終わる！以降、以下のpost.addEventListener文が実行される。
    }
    post.setAttribute("data-load", "true"); //②クリックした。data-loadがtureにその後流れで以下の関数が読み込まれ実行（クリック時色が薄くなる処理）
    post.addEventListener("click",() => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.post;
        if (item.checked == true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked == false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
// window.addEventListener("load", check);
setInterval(check, 1000);