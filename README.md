# Accordion

This is meant to be a base accordion structure that  can be easily styled.

To get started: 

- include the accordion.js into your projects main.js (dependent on jquery)
- include the css, scss, or less into your projects style sheets.
- copy and past the accordion html into a container in your project, the accordion will span the with of its parent container.
- add content into the defined content areas (replace included <p> containing ipsum)

After following those steps load the page and everything should be good to go.

#options:

In the js the mainAccordion() function can take two boolean parameters. 

- If the first parameter is set to true the accordion will function with a fade animation on the hidden content, else the accordion will just slide in and out.
- The second parameter only matter if the first is true. The second parameter tell the function if the accordion has an open section. If true the accordion is loading with a section open.

# If you wish to load with a section open.

- In the css uncomment the styles that show the first containers content.
- In the html add the class section-open to main-accordion-section.
