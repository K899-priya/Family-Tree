import { useState,useEffect }
from "react";

import {

collection,
query,
orderBy,
onSnapshot

}
from "firebase/firestore";

import { db }
from "../firebase";

function RealtimeGallery(){

const [media,setMedia]
=
useState([]);

useEffect(()=>{

const q=query(

collection(
db,
"gallery"
),

orderBy(
"createdAt",
"desc"
)

);

const unsubscribe=

onSnapshot(

q,

(snapshot)=>{

setMedia(

snapshot.docs.map(
doc=>({

id:doc.id,
...doc.data()

})

)

)

}

)

return unsubscribe;

},[]);

return(

<div>

<h2 className="
text-4xl
font-bold
text-center
mb-10
">
Family Live Gallery 🎬
</h2>

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"
>

{media.map(item=>(

<div
key={item.id}

className="
bg-white/10
rounded-3xl
overflow-hidden
backdrop-blur-lg
"
>

{
item.type==="image"

?

<img
src={item.url}
className="
w-full
h-72
object-cover
"
/>

:

<video
controls
className="
w-full
h-72
object-cover
"
>
<source src={item.url}/>
</video>

}

<div className="p-4">
{item.title}
</div>

</div>

))}

</div>

</div>

)

}

export default RealtimeGallery;