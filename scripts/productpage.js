
    let data = [
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/60112513_102_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/60112513_102_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            name:"Out From Under Aria Seamed Flare Pant",
            price:"55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/65317018_023_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/65317018_023_e?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            name:"Out From Under Aria Seamed Flare Pant",
            price:"40.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
            name:"Out From Under Aria Seamed Flare Pant",
            price:"60.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/57989303_010_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/57989303_010_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
            name:"Out From Under Aria Seamed Flare Pant",
            price:"$55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
            name:"ZOut From Under Aria Seamed Flare Pant",
            price:"$55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
            name:"XOut From Under Aria Seamed Flare Pant",
            price:"$55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
            name:"BOut From Under Aria Seamed Flare Pant",
            price:"$55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
            name:"BOut From Under Aria Seamed Flare Pant",
            price:"10.00",
            discount:"10% off",
            size:"L",
            color:"green",
            brand:"adidas",
            category:"cloth",
        },
    
        ]
    
        function appenddata(data){
            data.map(function(ele,index){
    
                let div = document.getElementById("product__img_name_price");
    
                let d1 = document.createElement("div");
                d1.setAttribute("id", "main_product_div")
    
                let img_div = document.createElement("div");
                img_div.setAttribute("id","img_of_product");           ////chnage img function
                
                let img = document.createElement("img");
                img.src = ele.img1;
    
                // img.addEventListener("mouseout")
                
                img_div.addEventListener("mouseover",function(){
                    // console.log("chnage img", index)
                    changeProduct_img1(ele,index,img);
                })
                img_div.addEventListener("mouseout",function(){
                    // console.log("chnage img", index)
                    changeProduct_img2(ele,index,img);
                })
                
                img_div.append(img);  // apendd img
    
                let details_div = document.createElement("div");
                details_div.setAttribute("id", "product_name_price");
    
                let name = document.createElement("p");
                name.innerText = ele.name;
    
                let price_discount = document.createElement("p");
    
                let price = document.createElement("span");
                price.innerText = `$${ele.price}   `;
    
                let discount = document.createElement("span");
                discount.innerText = ele.discount;
                discount.style.color = "cadetblue"
                price_discount.append(price,discount);
    
                let color = document.createElement("p");
                color.innerHTML = `<i class="fas fa-circle" style="color:${ele.color}; font-size: 20px;"></i> `;
    
                details_div.append(name,price_discount,color)
    
                d1.append(img_div,details_div);
    
                    
                    div.append(d1)
            })
    
    /////////////////////changing img when mouse over and mouseout//////////////////////////
            let changeProduct_img1 = (ele,index,img)=>{
                // console.log("hello");
               if(img.src==ele.img1){
                   img.src = ele.img2
               }
               else{
                   img.src = ele.img1
               }       
            }
            let changeProduct_img2 = (ele,index,img)=>{
                // console.log("hello");
                
               if(img.src==ele.img1){
                   img.src = ele.img2
               }
               else{
                   img.src = ele.img1
               }       
            }
    ///////////////////////////////////////////////////////////////////////////////////////////////
            
    
    
        }
        appenddata(data)
    

        /////////////////////    filter functions are here ///////////////////////////////////

        ///            by size filter

document.getElementById("bysize_").addEventListener("change", ()=>{
    let filter_items = data.filter(function(ele){
        var val = document.getElementById("bysize_").value;
        if(val=="size"){
            return ele.size
        }
        return ele.size ==val;
    })
    document.getElementById("product__img_name_price").innerHTML=null;
    // console.log(filter_items);
    appenddata(filter_items)
})

       /////         by color filter

       document.getElementById("bycolor_").addEventListener("change", ()=>{
        let filter_items = data.filter(function(ele){
            var val = document.getElementById("bycolor_").value;
            return ele.color ==val;
        })
        document.getElementById("product__img_name_price").innerHTML=null;
        // console.log(filter_items);
        appenddata(filter_items)
    })

    /////    by brand filter

    document.getElementById("bybrand_").addEventListener("change", ()=>{
        let filter_items = data.filter(function(ele){
            var val = document.getElementById("bycolor_").value;
            return ele.brand ==val;
        })
        document.getElementById("product__img_name_price").innerHTML=null;
        // console.log(filter_items);
        appenddata(filter_items)
    })

    ///////    by price filter 

  

    document.getElementById("byprice_").addEventListener("change", ()=>{
        let filter_items = data.filter(function(ele){
            let val = document.getElementById("byprice_").value;
            return  Number(ele.price)>=val;
        })
        document.getElementById("product__img_name_price").innerHTML=null;
        // console.log(filter_items);
        appenddata(filter_items)
    })

    ///// ther is no function for free pickup ////

    //////////////////////////////////   sort function here            /////////////////////////////////


        document.getElementById("by_sort_").addEventListener("change",()=>{
            let sort_items = data.sort(function(a,b){
                 let val = document.getElementById("by_sort_").value;

                 if(val=="lowtohigh"){
                     return Number(a.price) - Number(b.price);
                 }
                 else if(val == "hightolow"){
                     return Number(b.price) - Number(a.price);
                 }
                 else if(val=="az"){
                    if (a.name < b.name) return -1;
                    return 0;
                 }
                 else if(val=="za"){
                    if (a.name > b.name) return -1;
                    return 0;
                 }

            })

            document.getElementById("product__img_name_price").innerHTML=null;
            // console.log(sort_items);
            appenddata(sort_items)
        })