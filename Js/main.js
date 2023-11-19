let NavBar = document.querySelector('navbar');
let landing = document.querySelector(".Home")
let BTN = document.querySelector(".Hello");
let NavLinks = document.querySelectorAll('.navbar .nav-item a');

document.getElementById("BTN").onclick = function ()
{
    document.getElementById("Part2").classList.add("d-flex", "row");
	document.getElementById("Part2").classList.toggle("d-none");
	document.getElementById("BTN").innerHTML = 'The End';
};
document.getElementById("BTN2").onclick = function ()
{
    document.getElementById("Part3").classList.add("d-flex", "row");
	document.getElementById("Part3").classList.toggle("d-none");
	document.getElementById("BTN2").innerHTML = 'The End';
};


window.onscroll = function()
{
    if(scrollY <= 600)
    {
        BTN.style.display = 'none';
    }
    else
    {
        BTN.style.display = 'block';
    }
};
BTN.onclick = function ()
{
    window.scrollTo
    ({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};
