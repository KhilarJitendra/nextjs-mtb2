## setup reference

https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366

https://github.com/mertthesamael/embre/blob/master/app/layout.tsx

https://www.youtube.com/watch?v=Iu5aZDqZt8E

https://github.com/alexeagleson/nextjs-fullstack-app-template

folder structure

https://github.com/mertthesamael/embre/blob/master/app/page.tsx

NEXT JS -

https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI

Code Writing Best Practice - Front End Developer
To run Eslint/Stylelint in VCA project, need to run following command gulp jscheck - This is already integrated with Prepush process.

Stylelint (CSS/LESS) Refernce URL : https://stylelint.io/user-guide/ignore-code/ By Default, all required configurtion is enable at project level, can be checked in styelintrc.json, But due to some reason, few code snippet does not meet these configuration, hence Husky fails, To handle such scenario developer needs to ignore specific code line. For example :

To Disable Stylelint -

/_ stylelint-disable _/ - Will ignore complete file
/_ stylelint-disable configname / - This will ignore complete file with sepcifc configuration. For example If we add / stylelint-disable selector-class-pattern _/ then stylelint will only ignore selector naming convention, rest is still applicable such as formatting/max-depth-characters.
/_ stylelint-disable-line _/ - This will ignore only for a line where it is mentioned.
More Examples: /_ stylelint-disable selector-class-pattern / / stylelint-disable-line max-nesting-depth / / stylelint-disable selector-type-no-unknown / / stylelint-disable no-descending-specificity / / stylelint-disable indentation / / stylelint-disable-line declaration-no-important _/
To Enable Stylelint - We can again enable stylelint once this is disabled in a same file

/_ stylelint-enable _/ - This will enable stylelint again in complete file
/_ stylelint-enable-line _/ - This will enable stylelint again only for a line where it is mentioned
/_ stylelint-enable selector-class-pattern _/ - This will enable stylelint again complete file with sepcifc configuration.
ESLINT (JS) Refernce URL : https://eslint.org/docs/latest/rules/ By Default, all required configurtion is enable at project level, can be checked in eslintrx.json, But due to some reason, few code snippet does not meet these configuration, hence Husky fails, To handle such scenario developer needs to ignore specific code line. For example :

To Disable Eslint -

/_ eslint-disable _/ - Will ignore complete file
/_ eslint-disable no-console / - This will ignore complete file with sepcifc configuration. For example If we add / eslint-disable no-console _/ then eslint will only ignore console statement, rest is still applicable such as formatting/no unused variables/no const assignment.
/_ eslint-disable-line _/ - This will ignore only for a line where it is mentioned
/_ eslint-disable-next-line _/ - This will ignore only next line where it is mentioned
More Examples: /_ eslint-disable no-console / / eslint-disable comma-dangle / / eslint-disable no-spaced-func / / eslint-disable no-const-assign / / eslint-disable no-unused-vars / / eslint-disable quotes / / eslint-disable-line quotes / / eslint-disable-next-line quotes _/
To Enable Eslint - We can again enable eslint once this is disabled in a same file

/_ eslint-enable _/ - This will enable eslint again in complete file
/_ eslint-enable-line _/ - This will enable eslint again only for a line where it is mentioned
/_ eslint-enable selector-class-pattern _/ - This will enable eslint again complete file with sepcifc configuration.

DESIGN -

https://www.figma.com/file/KFdJwJnzBo03Uke4I43e0X/INWOOD---eCommerce-Landing-Page-([…])?type=design&node-id=911-735&mode=design&t=yhySFdRzleTJI9nT-0
