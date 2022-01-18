
    let data = [
        {
            img1:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_d?$xlarge$&fit=constrain&qlt=80&wid=100",
            img2:"https://images.urbndata.com/is/image/UrbanOutfitters/61655031_084_b?$xlarge$&fit=constrain&qlt=80&wid=100",
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
            name:"Out From Under Aria Seamed Flare Pant",
            price:"$55.00",
            discount:"10% off",
            size:"M",
            color:"yello",
            brand:"adidas",
            category:"cloth",
        },
    
        ]
    
        function appenddata(){
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
                price.innerText = ele.price;
    
                let discount = document.createElement("span");
                discount.innerText = ele.discount;
                price_discount.append("price,discount");
    
                let color = document.createElement("p");
                color.innerHTML = `<i class="fas fa-circle" style="color:${ele.color}; font-size: 20px;"></i> <i class="fas fa-circle" style="color: green; font-size: 20px;"></i>`;
    
                details_div.append(name,price_discount,color)
    
                d1.append(img_div,details_div);
    
                    
                    div.append(d1)
            })
    
    /////////////////////changing img when mouse over and mouseout//////////////////////////
            let changeProduct_img1 = (ele,index,img)=>{
                console.log("hello");
               if(img.src==ele.img1){
                   img.src = ele.img2
               }
               else{
                   img.src = ele.img1
               }       
            }
            let changeProduct_img2 = (ele,index,img)=>{
                console.log("hello");
                
               if(img.src==ele.img1){
                   img.src = ele.img2
               }
               else{
                   img.src = ele.img1
               }       
            }
    ///////////////////////////////////////////////////////////////////////////////////////////////
            
    
    
        }
        appenddata()
    