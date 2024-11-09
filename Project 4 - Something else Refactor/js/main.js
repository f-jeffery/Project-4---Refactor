let contentSections=["nature", "friends", "mtg", "help"];
let navElements=document.querySelectorAll('nav > div > div')

navElements[0].addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})

for (let i = 1; i < navElements.length; ++i) {
      
        navElements[i].addEventListener("click", function(ev){  
          //remove selected class from all menu items
          for (let i = 0; i < navElements.length; i++) {
            navElements[i].classList.remove("selected");
          }
          //add selected class to menu item that was clicked
          let el = ev.currentTarget;
           el.classList.add('selected');

          //now hide all content sections
          for(section of contentSections){
             let el = document.getElementById(`${section}Section`);
             el.classList.remove("show");
             el.classList.add("hide");
           }
          //now show the one content section
          let name=`${el.id}Section`
          let showEl=document.getElementById(name);
          if(showEl != null)
          {
            showEl.classList.add('show');
            showEl.classList.remove("hide");
            showEl.scrollIntoView({behavior: "smooth", block: "start", inline:"nearest"});
          }
        });
     
  }

  
document.getElementById("toggle-mode").addEventListener("click", function(){
  toggle_dark_mode("css/alt.css");
})

function toggle_dark_mode(href, onOff)
{
  var currentSheet = 0;
  for(var i = 0; i < document.styleSheets.length; i++)
  {
    if(document.styleSheets[i].href)
      {
        console.log(document.styleSheets[i].href)
        console.log(href);
        if(document.styleSheets[i].href.indexOf(href) > -1)
        {
          console.log(document.styleSheets[i].ownerNode);
          currentSheet = document.styleSheets[i].ownerNode;
        }
      }
  }
  if(onOff == undefined) 
    {
      onOff = !currentSheet;
    }
  if(onOff)
  {
    if(currentSheet) return onOff;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
    document.getElementById("toggle-mode").innerHTML = "Toggle Dark Mode";
  } else { //TURN OFF:
    if (currentSheet) currentSheet.parentNode.removeChild(currentSheet)
    document.getElementById("toggle-mode").innerHTML = "Toggle Light Mode";
  }
  return onOff
}