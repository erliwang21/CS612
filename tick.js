function tick() {
const element = (
<div>
<h1>Hwllo World!</h1>
<h1>Thank you for visiting my website!</h1>
<h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>
);
ReactDOM.render(element, document.getElementById('main'));
}
setInterval(tick, 1000);
