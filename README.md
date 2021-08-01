
# Event Delegation

ED is the technique of leveraging event bubbling to handle events at the higher level at the DOM instead of 
target element.
The way we hanlde too many event handlers problem is called ED.

# Issues with multiple event handlers:
These event handlers directly impact the perfrmance of the web page.

 - Every event handler is function which basically is a object that takes up memory, the more the memory occupied the slower the performance.
 - It takes time to assign all the event handlers which causes delay in the intaractivity of the page.
 - The document object is available immediately. As long as the element is rendered, it can start functioning correctly without delay. You don’t need to wait for the `DOMContentLoaded` or `load` events.

 # Process:

  1) So, when you click at any of the child `<li>` inside `<ul>`, the click bubbles to the parent element.
  2) Hence, instead handling the click event at the individual element, you can capture the click at the parent.
  3) You can access the individual element that dispatches(fires) the event using the `target` property of the event.

