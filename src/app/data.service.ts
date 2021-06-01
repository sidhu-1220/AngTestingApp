import { Injectable } from '@angular/core';
import { Product } from './Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Mobiles Component data
  private  mobiles:Product[]=[

    {
    productTitle:"Samsung A52",
    description:"Samsung",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a52-4g.jpg"
    },
    {
    productTitle:"Samsung S21 Ultra 5G",
    description:"Samsung",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg"
    },
    
    {
    productTitle:"Samsung Note20 Ultra 5G",
    description:"Samsung",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-ultra-.jpg"
    },
    
    {
    productTitle:"Samsung M42 5G",
    description:"Samsung",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m42.jpg",
    },
    
    {
    productTitle:"OnePlus 9 Pro",
    description:"OnePlus",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
    },
    
    {
    productTitle:"OnePlus 9R ",
    description:"OnePlus",
    productImage:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-9r.jpg"
    },
    {
      productTitle:"OnePlus 9",
      description:"OnePlus",
      productImage:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-.jpg"
    },
    {
      productTitle:"OnePlus Nord",
      description:"OnePlus",
      productImage:"https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord.jpg",
    },
    
    ];

    // Bikes Component Data
    private bikes:Product[]=[

      {
      productTitle:"Royal Enfield Classic 350",
      description:"Royal Enfield",
      productImage:"https://media.zigcdn.com/media/model/2021/Feb/royal-enfield-classic-350-dual-channel_600x400.jpg"
      },
      {
        productTitle:"KTM 125 Duke",
        description:"KTM",
        productImage:"https://c.ndtvimg.com/2018-12/mv8lerec_ktm-125-duke-first-ride-review_625x300_22_December_18.jpg",
      },
      {
        productTitle:"Royal Enfield Bullet 350",
        description:"Royal Enfield",
        productImage:"https://media.zigcdn.com/media/content/2020/Sep/royal_enfield_bullet_350_bs6_price_hiked_once_again-2.jpg", 
      },
      {
        productTitle:"TVS Apache RTR 160 4V",
        description:"TVS",
        productImage:"https://bd.gaadicdn.com/processedimages/tvs/tvs-apache/640X309/tvs-apache60487e96521ec.jpg",
      },  
      {
         productTitle:"Bajaj Pulsar 125",
          description:"Bajaj",
          productImage:"https://bd.gaadicdn.com/processedimages/bajaj/pulsar-125/source/pulsar-1255eeb1f3099f0f.jpg",  
      },   
      {
          productTitle:"KTM RC 390",
          description:"KTM",
          productImage:"https://bd.gaadicdn.com/processedimages/ktm/ktm-rc-390/494X300/ktm-rc-3905fd47e21be07d.jpg?tr=w-360",
      },
      {
        productTitle:"Yamaha YZF R15 V3",
        description:"Yamaha",
        productImage:"https://bd.gaadicdn.com/processedimages/yamaha/yzf-r15-v3/source/yzf-r15-v35ef09f2bdceb3.jpg",
      },
      {
          productTitle:"Harley Davidson Street Rob",
          description:"Harley Davidson",
          productImage:"https://bd.gaadicdn.com/processedimages/harley-davidson/street-rod/494X300/street-rod5e7344d54b2a9.jpg?tr=w-360",
      },
      
      ];

      // Television Component Data
      private telivisions:Product[]=[

        {
        productTitle:"Samsung 8K Smart TV",
        description:"Ultra HD QLED 8 Series 65Q800T",
        productImage:"https://images.samsung.com/is/image/samsung/in-qled8k-q800t-qa65q800takxxl-frontsilver-229130875?$684_547_PNG$"
        },
        {
          productTitle:"Samsung 4K HDR Smart TV",
          description:"85” QN95A Neo QLED",
          productImage:"https://images.samsung.com/is/image/samsung/p6pim/uk/qe85qn95aatxxu/gallery/uk-neo-qled-qn95a-qe85qn95aatxxu-404149517?$720_576_PNG$",
        },
        {
          productTitle:"Samsung 4K Smart TV",
          description:"65” Q80T QLED",
          productImage:"https://images.samsung.com/is/image/samsung/in-qled-tv-q80t-qa65q80takxxl-frontsilver-224904723?$720_576_PNG$", 
        },
        {
          productTitle:"Samsung 8K Smart TV",
          description:"85” Q950T QLED",
          productImage:"https://images.samsung.com/is/image/samsung/in-qled-tv-q950t-qa85q950tskxxl-lperspectiveblack-229131101?$684_547_PNG$",
        },  
        {
           productTitle:"OnePlus TV Q1 Series",
            description:"OnePlus",
            productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzwJOji5Xb6Sc678G9JpPwU7yyf-yB1G35fX55gFD4WNq10TOFf0I&usqp=CAc",  
        },   
        {
            productTitle:"OnePlus TV U1 Series ",
            description:"OnePlus",
            productImage:"https://image01.oneplus.net/ebp/202007/24/1-m00-16-9f-rb8lb18a_kuarr3caakcqgnuyvk248_840_840.png",
        },
        {
          productTitle:"OnePlus TV Y Series",
          description:"OnePlus",
          productImage:"https://i.gadgets360cdn.com/products/large/oneplus-tv-u-series-db-800x450-1593694380.jpg",
        },
        {
            productTitle:"Sony Bravia 4K Ultra HD 55X8000H",
            description:"Sony",
            productImage:"https://www.sony.co.in/image/4dfd9ca48ba82b26b620b9049c099665?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        },
        
        ];


    // Mobile Calling data
    getMobilesData():Product[]
    {
      return this.mobiles;
    }

    // Bikes calling Data
    getBikesData():Product[]
    {
      return this.bikes;
    }

    // Televisions calling data
    getTelivisionData():Product[]
    {
      return this.telivisions;
    }
    
}
