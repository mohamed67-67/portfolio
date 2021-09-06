# Refactor Startegy

## LayOut Component
to improve the app and make it less redundant we can make the LayOut Component Global and for the title we can use heading
```
<Head>
        <title>MPA | Home</title>
</Head>
```

### example of how lay out component wrap the whole app

![app](https://user-images.githubusercontent.com/74463744/132213167-41c11b72-30b4-46db-92d6-e4bc9212131e.png) ![layout](https://user-images.githubusercontent.com/74463744/132213172-40d9e3d0-8a06-4cca-9469-e23e8e6e9b19.png)

___

## Styling Structure
two types of Styling files
- global file
- certain file for a single component

the global file applies styling for the general elements in the app like styling in html `scroll-behavior: smooth;` or in the body `box-sizing: border-box;`

the certain file applies different styling for each component and it will be only exclusive for this component and in this case we got privilages like
- the code becomes more readable and more structured
- we do not have to worry about redundant classNames in styling because each component will only read the exclusive file that was written to it

### the structure of styles folder
- the global file is individual in styles folder 'globals.css'
- we make a single folder for each page like folder for 'mentorship' page and sub files for different components in it
- the name of each file that represents styling and stands for a one component in the page 'component.module.css'

the structure of folders and files be like

![styles](https://user-images.githubusercontent.com/74463744/132217818-eb72dad9-a4b6-4885-8923-5b1f3bf64f46.png)











