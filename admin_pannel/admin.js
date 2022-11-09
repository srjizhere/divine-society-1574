window.onload = (() => {
    let form = document.getElementById("addProduct");
    form.onsubmit = () => {
        addProduct(event);
    };
});
// document.getElementById("navbar").innerHTML = navbar();

// const api = `https://perfect-tam-toad.cyclic.app/api/product`;
const api = `https://modesens-data3.onrender.com/api/product`;

let addProduct = async(e) => {
    e.preventDefault()
    let form = document.getElementById("addProduct");

    let title = form.title.value;
    let image = form.image.value;
    let price = form.price.value;
    let description = form.description.value;
    let discount = form.discount.value;
    let brand = form.brand.value;
    let category = form.category.value;

    let data = { id: Date.now() + Math.random() * 100,title, image, price ,description,discount, brand,category };

    //POST
    await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
           "Content-Type": "application/json",
        },
    });

    form.reset();
    console.log("done");

}


// {
//     "Beauty":[
//         {
//             "url":"https://cdn.modesens.com/product/6678065_76?w=400&",
//             "name":"SISLEY PARIS ",
//             "desc":"Black rose precious Face oil 25ml/0.84oz",
//             "price":200,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://n.nordstrommedia.com/id/sr3/d2996d5b-6196-42db-b401-c7032c0b90a8.jpeg?w=780&h=838",
//             "name":"SISLEY PARIS ",
//             "desc":"soapless Gentle Foaming Cleaning, 85G",
//             "price":100,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://n.nordstrommedia.com/id/sr3/d4522742-c93b-483e-b2af-ff01f1704573.jpeg?w=780&h=838",
//             "name":"SISLEY PARIS ",
//             "desc":"Sisley-pairs velvet Nourishing Cream ",
//             "price":110,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://n.nordstrommedia.com/id/sr3/464f00db-8256-4d70-895b-1b8f0e9a65f4.jpeg?w=780&h=838",
//             "name":"SISLEY PARIS ",
//             "desc":"Sisley blush Brush, Women's in White",
//             "price":170,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/20609416_27?w=400&",
//             "name":"CHARLOTTE TILBURY",
//             "desc":"The Air-brush kabuki Bronzing Brush In",
//             "price":35,
//                 "type":"womens",
//                 "stores":10

//         },
//         {
//             "url":"https://cdn.modesens.com/product/20950740_22?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"Sisly- paris Triple oil Balm Make-up",
//             "price":99,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6678166_58?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"5.O Oz Sisleya Essential Skin Care Lotion In",
//             "price":180,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6291076_15?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"Instant eclat Instant Glow Primer 30ml In",
//             "price":78,
//                 "type":"womens",
//                 "stores":10

//         },
//         {
//             "url":"https://n.nordstrommedia.com/id/sr3/ec9d7940-9983-47f6-98a5-8b32cf43628e.jpeg?w=780&h=838",
//             "name":"SISLEY PARIS",
//             "desc":"Sisley-paris Sisleya l'integral Anti-age Hand",
//             "price":120,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6288523_25?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"Sisley-paris Eau Du soir Perfumed Bath And",
//             "price":60,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6701621_48?w=400&",
//             "name":"BOBBI BROWN",
//             "desc":"Eye Shodow Brush In White",
//             "price":37,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6711226_43?w=400&",
//             "name":"SHISEIDo",
//             "desc":"Future solution Lx Concentrated Balancing",
//             "price":130,
//             "stores":10,
//             "type":"womens"
//         },
//         {
//             "url":"https://cdn.modesens.com/product/13176593_54?w=400&",
//             "name":"BOBBI BROWN",
//             "desc":"Hydrating Eye Cream, 15ml-one Size in",
//             "price":56,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6688824_54?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"Super Soni Self Tanning Hydrating Facial ",
//             "price":112,
//                 "type":"womens",
//                 "stores":10

//         },
//         {
//             "url":"https://cdn.modesens.com/product/6701641_48?w=400&",
//             "name":"SISLEY PARIS",
//             "desc":"Sisley-paris Retractable kabuki Brush In ",
//             "price":80,
//             "stores":8,
//             "type":"womens"
//           },
//         {
//             "url":"https://www.net-a-porter.com/variants/images/665933304264224/in/w1000.jpg",
//             "name":"CHARLOTTE TILBURY",
//             "desc":"full Fat Lashes Maskara- Colour Glossy",
//             "price":29,
//                 "type":"womens",
//                 "stores":12

//         },
//         {
//             "url":"https://cdn.modesens.com/product/6718376_52?w=400&",
//             "name":"KIEHL'S SINCE 1851",
//             "desc":"1851 Ginger Leaf & Hibiscus Firming Mask",
//             "price":23,
//             "stores":7,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6710063_42?w=400&",
//             "name":"KIEHL'S SINCE 1851",
//             "desc":"1851 Dermatologiest Solutions Clearly",
//             "price":27,
//             "stores":7,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6718025_52?w=400&",
//             "name":"SHISEIDO",
//             "desc":"Refreshing Cleaning Water 6 0z/180 ml In",
//             "price":38,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://www.net-a-porter.com/variants/images/2499567819045494/in/w1000.jpg",
//             "name":"CHARLOTTE TILBURY",
//             "desc":"Luxury Pallet Vintage Vampo Color  ",
//             "price":53,
//             "stores":6,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6683336_39?w=400&",
//             "name":"BOBBY BROWN",
//             "desc":"Crushed Lip color Lipstick in sunset",
//             "price":33,
//             "stores":6,
//             "type":"womens"
//           },
//         {
//             "url":"https://www.net-a-porter.com/variants/images/665933301173613/in/w1000.jpg",
//             "name":"CHARLOTTE TILBURY",
//             "desc":"Multi Miracle Glow Cleaner, Mask Balm",
//             "price":60,
//             "stores":7,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/7878846_43?w=400&",
//             "name":"ANASTASIA BEVERLY HILLS",
//             "desc":"Sun Dipped Glow kit- Sun Dipped In",
//             "price":47,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/10301325_26?w=400&",
//             "name":"SHISEIDO",
//             "desc":"Future Soluton Lx Total Protective Emulsion",
//             "price":265,
//             "stores":6,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/10859503_36?w=400&",
//             "name":"SHISEIDO",
//             "desc":"White lucent anti Dark Circles Eye Cream",
//             "price":65,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/19566419_19?w=400&",
//             "name":"GUCCI",
//             "desc":"Crayan Definition Sourcils- Powder Eyebro",
//             "price":35,
//             "stores":6,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/media/55116905",
//             "name":"ANASTASIA BEVERLY HILLS",
//             "desc":"Precesion Tweenzers in N,a",
//             "price":29,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/6686675_62?w=400&",
//             "name":"BOBBY BROWN",
//             "desc":"Beach Fragrance 1.7 Oz /50 ml",
//             "price":80,
//             "stores":9,
//             "type":"womens"
//           },
//         {
//             "url":"https://cdn.modesens.com/product/12767140_55?w=400&",
//             "name":"ANASTASIA BEVERLY HILLS",
//             "desc":"Mini Eye Primer 0.24 FI Oz /7 ml In No Color ",
//             "price":16,
//             "stores":6,
//             "type":"womens"
//           }

//     ],
//     "Kids":[
//         {
//             "url":"https://cdn.modesens.com/product/24969331_41?w=400&",
//             "name":"BURBERRY",
//             "desc":"Kids Babys & and Little boys Logo",
//             "price":170,
//             "stores":11,
//             "type":"kids"
//         },
//         {
//             "url":"https://cdn.modesens.com/product/21867878_29?w=400&",
//             "name":"BURBERRY",
//             "desc":"Kids Beige vintage Check Head band",
//             "price":160,
//             "stores":12,
//             "type":"kids"
//         },
//         {
//             "url":"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/221376M718000_1.jpg",
//             "name":"BURBERRY",
//             "desc":"Burberry kids graham checked panelled",
//             "price":220,
//             "stores":14,
//             "type":"kids"
//         },
//         {
//             "url":"https://cdn.modesens.com/product/37634880_2?w=400&",
//             "name":"BURBERRY",
//             "desc":"t Shirt",
//             "price":133,
//             "stores":12,
//             "type":"kids"
//         },
//         {
//             "url":"https://cdn.modesens.com/availability/30845999?w=400&",
//             "name":"BURBERRY",
//             "desc":"Burberry kids graham checked & Icon Stripe",
//             "price":100,
//             "stores":14,
//             "type":"kids"
//         },
//         {
//             "url":"https://images.bloomingdalesassets.com/is/image/BLM/products/9/optimized/11080829_fpx.tif?op_sharpen=1&wid=700",
//             "name":"BURBERRY",
//             "desc":"Kids Boys Abtot Logo Print t shirt ",
//             "price":110,
//             "stores":10,
//             "type":"kids"
//         },
//         {
//             "url":"https://cdn.modesens.com/availability/42137543?w=400&",
//             "name":"BURBERRY",
//             "desc":"Unisex Mini Lakhall Icon Stripped Logo",
//             "price":126,
//             "stores":11,
//             "type":"kids"
//         },
//         {
//             "url":"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212376M708001_1.jpg",
//             "name":"BURBERRY",
//             "desc":"Girls Rosie check Leather Chlsea Boots",
//             "price":470,
//             "stores":10,
//             "type":"kids"
//         },
//         {
//             "url":"https://cdn.modesens.com/product/32216545_22?w=400&",
//             "name":"BURBERRY",
//             "desc":"Girls gina Vintage Check Leggings-",
//             "price":225,
//             "stores":13,
//             "type":"kids"
//         },
//         {
//             "url":"https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/fc/P00633103.jpg",
//             "name":"BURBERRY",
//             "desc":"Babies Eugene Logo-Print Stretch Cotton",
//             "price":202,
//             "stores":12,
//             "type":"kids"
//         }
//     ],
//     "mens":[
//         {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
//               "name":"Clinque",
//               "desc": "Beardo Hair Growth Oil",
//             "price":16,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/0/c084a91NYKAB00000507_1.jpg",
//             "name":"VINCE CAMUTO",
//               "desc": " SKINRX 5% Niacinamide Spot Correct Day Moisturiser",
//             "price":65,
//             "stores":6,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904223818706hgv_1.jpg",
//               "name":"Clinque",
//               "desc": "Ustraa Hair Growth Vitalizer - Boost Hair Growth, Prevents",
//             "price":16,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/9/994a850NYKAB00000184_1.jpg",
//               "name":"Clinque",
//               "desc": "Nykaa Naturals Tea Tree & Neem Purifying & Hydrating",
//             "price":16,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8907367001867_tmc_1.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "The Man Company Charcoal Face Wash With Ylang-Ylang ",
//             "price":180,
//             "stores":5,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2abbf04NYKMCF0000002_1.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Tan Removal Coffee Body Scrub",
//                 "price":30,
//             "stores":1,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/d/cd9f379nykmcf0000008_1_new.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Rich Deep Moisturizing Choco Body",
//                 "price":100,
//             "stores":5,
//             "type":"mens"
            
//           },
//           {
//            "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4c1578nymcfn0000031_1rvm.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Coffee Body Polishing Oil",
//                 "price":16,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/acf7ff9nykmcf0000004_1new.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Tan Removal Coffee Face Scrub",
//                 "price":52,
//             "stores":6,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/acf7ff9nykmcf0000004_1new.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Tan Removal Coffee Face Scrub",
//                 "price":118,
//             "stores":11,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efd9578nymcfn0000029_1rvm.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Coffee Under Eye Cream - Relieves",
//                 "price":16,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/e/eecdff9nymcfcom00033_1new.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Body Polishing Kit",
//             "price":66,
//             "stores":14,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/8/78b6578nykmcf0000003_1rvm.jpg",
//               "name":"VINCE CAMUTO",
//               "desc": "MCaffeine Naked & Raw Deep Cleansing Coffee Face Wash",
//                 "price":16,
//             "stores":12,
//             "type":"mens"

//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/c/3c45559NYMCFN0000022_1main.jpg",
//               "name":"Clinque",
//               "desc": "MCaffeine Naked Detox Hydrating Green Tea Face",
//                 "price":52,
//             "stores":12,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3360372078500.jpg",
//               "name":"Clinque",
//               "desc": "Giorgio Armani Acqua Di Gio Eau De Toilette",
//             "price":16,
//             "stores":18,
//             "type":"mens"
//           },
//           {
//            "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05e9578nymcfn0000025_1rvm.jpg",
//               "name":"Clinque",
//               "desc": "MCaffeine Naked & Raw Moisturizing Coffee Body",
//                 "price":89,
//             "stores":6,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05e9578nymcfn0000025_1rvm.jpg",
//               "name":"Clinque",
//               "desc": "MCaffeine Naked & Raw Sun Protection Coffee Face Serum",
//                 "price":52,
//             "stores":9,
//             "type":"mens"
//           },
//           {
//             "url":
//               "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/3/63135823562700373169_asp1.jpg",
//               "name":"Clinque",
//               "desc": "Jaguar Classic Black Eau De",
//             "price":526,
//             "stores":18,
//             "type":"mens"
//           }
//     ]
// }