# Create a magical table

All characters are gathered together again.

This time try to create a beautiful table consisting of all
the character entries of the *characters* array with JavaScript.

**Tips:**

- forEach Loops
- document.createTextNode()
- document.createElement()
- element.style.textAlign 
- Object.key(obj) -> to display keys of an object like *name, height, eye_color, ...*

<br>

```javascript
const characters = [
    {
        name: 'Harry Potter',
        height: 170,
        eye_color: 'green',
        house: 'Gryffindor',
        gender: 'male',
    },
    {
        name: 'Ron Weasley',
        height: 185,
        eye_color: 'blue',
        house: 'Gryffindor',
        gender: 'male',
    },
    {
        name: 'Hermione Granger',
        height: 165,
        eye_color: 'brown',
        house: 'Gryffindor',
        gender: 'female',
    },
    {
        name: 'Draco Malfoy',
        height: 178,
        eye_color: 'grey',
        house: 'Slytherin',
        gender: 'male',
    },
];
```

<br>

Example (how it should look like):

<figure>
<img src="Magic_Table_Result.png">
<figcaption>
Result of the magical table created with JS
</figcaption>
</figure>

<br>
<br>

Table example in HTML: (build it with JS!)

```html
<table>
<tr>
<th>name</th>
<th>height</th>
<th>eye_color</th>
<th>house</th>
<th>gender</th>
</tr>

<tr>
<td>Harry Potter</td>
<td>170</td>
<td>green</td>
<td>Gryffindor</td>
<td>male</td>
</tr>
</table>

```

