<template>
  <footer class="footer">
    <div class="modal" id="privacy-policy" :class="{ 'is-active': isOpen }">
      <div class="modal-background" @click="isOpen = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">プライバシーポリシー</p>
          <button
            class="delete"
            aria-label="close"
            @click="isOpen = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="content">
            <h3>アクセス解析ツールについて</h3>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            </p>
            <p>
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              この規約に関して、詳しくは以下のサイトをご覧ください。
            </p>
            <ul>
              <li>
                <a href="http://www.google.com/analytics/terms/jp.html"
                  >Google Analyticsの利用規約</a
                >
              </li>
              <li>
                <a href="http://www.google.com/intl/ja/policies/privacy/"
                  >Googleのプライバシーポリシー</a
                >
              </li>
            </ul>

            <h3>免責事項</h3>
            <p>
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p>
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
            </p>
            <p>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください
            </p>

            <h3>プライバシーポリシーの変更について</h3>
            <p>
              当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
            </p>
            <p>
              修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="isOpen = false">Close</button>
        </footer>
      </div>
    </div>
    <div class="content has-text-centered">
      <p>&copy; 2019 ミルク蒼屋</p>
      <a @click="isOpen = true">プライバシポリシー</a>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
}
</script>

<style lang="stylus" scoped>
@keyframes show
  from
    opacity 0

  to
    opacity 1

.is-active
  animation show 0.1s linear 0s
</style>
