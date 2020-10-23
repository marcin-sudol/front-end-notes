# DOM

**Querying elements**

```
document/element.getElementById(id)

document/element.getElementsByClassName(name)    // iterable collection

document/element.getElementsByTagName(name)      // iterable collection

document/element.querySelectorAll(selector)      // iterable node list

document/element.querySelector(selector)         // first element matching selector

--

document.body

document.forms

document.anchors

document.links

document.images

...
```

**Modifying elements**

```
document.createElement(element)

document.createTextNode(str)

parent.appendChild(element)

parent.replaceChild(element, child)

parent.insertBefore(element,child)

parent.removeChild(element)

element.remove()                                  // does not work in old browsers

--

element.innerHTML = value

element.attribute = value

element.setAttribute(attribute, value)

element.style.property = value
```

**Adding events**

```
element.onload = myFunction                       // events name with "on"

element.onunload = myFunction

element.onchange = myFunction

element.onmouseover = myFunction

element.onmouseout = myFunction

element.onclick = myFunction

element.onmousedown = myFunction

element.onmouseup = myFunction

element.onfocus = myFunction

--

element.addEventListener("click", myFunction)     // event name without "on"

element.removeEventListener("click", myFunction)

window.addEventListener("resize", myFunction)     // can add event listener to other objects like window

...

```

**Nodes**

```
node.parentNode

node.childNodes

node.firstChild

node.lastChild

node.nextSibling

node.previousSibling

node.nodeName

node.nodeValue

node.nodeType
```
