import { select, selectAll } from "../modules/helpers/selectors";

export default function hashHandler(router) {
    this.oldHash = window.location.hash;
    this.Check;

    let that = this;
    let detect = function () {
        if (that.oldHash != window.location.hash) {
            let articles = selectAll("article");
            articles.forEach(article => {
                article.remove();
            });
            router.init();
            that.oldHash = window.location.hash;
        }
    };
    this.Check = setInterval(function () { detect() }, 100);
}