# Project Template 

### create app
```
npx create-expo-app@latest reactnative --template blank@latest
```

### Install dependencies
```
npx expo install expo-router react-native-safe-area-context react-native-screen expo-linking expo-constants expo-status-bar
```

### setup entry point
package.json
```
"main": "expo-router/entry"
```

then copy app.js code and then make app folder and then make _layout.jsx file 
and paste the code there

### Modify project configuration
app.json
```
"scheme": "appName"
```

then start 

--- 
after that we create a file index.jsx in app folder its ours home page

---
use rnfes in _layout file

---
 then we import Slot in _layout file that is used for importing its current children route  

--- 
then we use Stack for different screen and return stack 
```
<Stack.Screen name="index" options={{ headerShown: false}} />
```

After that we create a profile.jsx file 
and we will return to our home page and make /profile via importing Link
```
<Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
```
