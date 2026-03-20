# 1.FormData

funciton handleSave(e){
e.preventDefault();
const formData=new FormData(e.target);
const fullName=formData.get("fullName");
const email=formData.get("email");
//Or convert the whole thing to an object
const formProps=Object.fromEntries(formData);
}
\*Key Tip:
Make sure your 'input' tags have a name attribute (e.g.,name="fullName").FormData uses the name attribute to identify the fields, though it often works with id in some environments, name is the standard for forms.

# 2.Define Gradient Colors as variales

1.@theme {
--color-brand-primary:#3b82f6;
--color-brand-secondary:#ec4899;
}
use them in yout HTML:
class="bg-linear-to-r from-brand-primary to-brand-secondary"

2.Denfine entire gradients as variables
Name your variabel with the --background-image-_ prefix allows you use it directly with the bg-_ utility
@theme{
--background-image-main-gradient:linear-gradient(to:right,#3b82f6,#ec4899);
}
html:
class="bg-main-gradient"

# 3.classes:

1. self-end: specifically tells this one child of the flex container to align to the "end" (the right side).

2. w-fit:Shrinks the element width so it only occupies the space needed for its text and padding.

# 4.Use defaultValue instead of value

defaultValue sets the initial text when the form appears but allows the user to type and change it freely.
(In React, once you assign a value prop to an 'input', React locks that input to the value of the variable you provided)

# 5.The most native way to create adate picker is to use the standard HTML 'input type="date"'

# 6.Why is the logo distorted?

You are using a flexbox container. if there is no enough space, flexbox will squash (shrink) items to make them fit. Images are often the first victims of this squashing, turing circles into ovals
The solution:
you need to explicitly tell the browser: shrink-0
<img src={logo} className="h-auto w-5 shrink-0 object-contain">
shrink-0: prevent the flex container from squashing the width
object-contain: ensure the image aspect ratio is preserved

# 7.Rotate the arrow icon based on clicks:

change the className conditionally based on whether show is true or false
(to make it smooth:add a transition class)
eg:
className={`h-auto w-3.5 transition-transform duration-300 ${shoe ?"rotate-180" : "rotate-0"}`}

# 8.Deploy

1. Make sure you have run git push so your latest code is on GitHub.
2. Go to the Netlify website and log in.
3. Click "Add new site" -> "Import an existing project".
4. Choose GitHub.
5. Select your cv-application repository.
6. Leave all settings as default. (Netlify automatically detects it's a Vite/React app).
7. Click Deploy.
8. How to update the live site?
   Just run git push on your computer. Netlify watches your GitHub. When it sees a new push, it automatically rebuilds and updates the website.
