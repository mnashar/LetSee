require 'faker'
require 'open-uri'


# (1..20).each do |i|
#     img=Faker::Avatar.image;
#     file_name='user_'+i.to_s+'.jpg'
#     file = open(img)
#     open('./app/assets/images/users/'+file_name, 'wb') do |webfile|
#         webfile << open(img).read
#     end
# end

            




old_users=User.all
old_users.each do |old_user|
    old_user.images.purge
end
old_users.delete_all

old_reviews=Review.all
old_reviews.delete_all

old_products=Product.all

old_products.each do |old_product|
    old_product.profile_pic.purge
end

old_products.delete_all
old_products.delete_all

old_cats=Category.all
old_cats.delete_all

user1=User.new(name:"Marwa",email:"msn@aucegypt.edu")
user1.password="mmmmmm"
user1.photourl="../app/assets/images/users/marwa.jpg"

user1.save!
file = File.open('app/assets/images/users/marwa.jpg')
user1.profile_pic.attach(io: file, filename: 'marwa.jpg')

users_num=rand(20)
(1..20).each do |i|
    user=User.new(name: Faker::Name.name ,email:Faker::Internet.email)
    user.password="mmmmmm"
    # user.photourl="../../../app/assets/images/users/"+i.to_s+".jpg";

    user.save!
    
        
    # post = Post.first
    file = File.open('app/assets/images/users/'+i.to_s+'.jpg')
    user.profile_pic.attach(io: file, filename: i.to_s+'.jpg')
    # user.photo.attached? # => true

end


cats=[
    "Everyday Finds",
    "Jewelery & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft Supplies",
    "Gifts"
]
images=[
     ["https://i.etsystatic.com/20794106/r/il/d650bc/2381415449/il_fullxfull.2381415449_rvj0.jpg",
    "https://i.etsystatic.com/20794106/r/il/7fb303/2381415453/il_794xN.2381415453_ihan.jpg",
    "https://i.etsystatic.com/20794106/r/il/6ae130/2333823346/il_794xN.2333823346_o3qh.jpg",
    "https://i.etsystatic.com/20794106/r/il/3f584d/2381415457/il_794xN.2381415457_175a.jpg",
    "https://i.etsystatic.com/20794106/r/il/a3bee1/2333823338/il_794xN.2333823338_na6u.jpg"

    ],
    
    ["https://i.etsystatic.com/7639628/r/il/209163/2010690101/il_fullxfull.2010690101_j4hv.jpg",
    "https://i.etsystatic.com/7639628/r/il/e5c93b/2319178487/il_794xN.2319178487_f214.jpg",
    "https://i.etsystatic.com/7639628/r/il/7d4b25/2271578068/il_794xN.2271578068_1ge3.jpg"

    ],
    
    ["https://i.etsystatic.com/6955363/r/il/e4b463/2334588022/il_fullxfull.2334588022_hfvh.jpg",
    "https://i.etsystatic.com/6955363/r/il/29b97d/2346201441/il_794xN.2346201441_tc8a.jpg",
    "https://i.etsystatic.com/6955363/r/il/7eef39/2298593334/il_794xN.2298593334_pteh.jpg",
    "https://i.etsystatic.com/6955363/r/il/03904b/2298591238/il_794xN.2298591238_fm3p.jpg",
    "https://i.etsystatic.com/6955363/r/il/f05c25/2346203321/il_794xN.2346203321_jsx7.jpg"

    ],
    
    ["https://i.etsystatic.com/22143018/r/il/f6e5be/2421937471/il_794xN.2421937471_5qcj.jpg",
    "https://i.etsystatic.com/22143018/r/il/c34711/2374326900/il_794xN.2374326900_lg2x.jpg",
    "https://i.etsystatic.com/22143018/r/il/559f92/2374327348/il_794xN.2374327348_9g6p.jpg",
    "https://i.etsystatic.com/22143018/r/il/16b2dc/2421937171/il_794xN.2421937171_6n14.jpg"

    ],
    
    ["https://i.etsystatic.com/15488044/r/il/998aea/1432268635/il_fullxfull.1432268635_8xnq.jpg",
    "https://i.etsystatic.com/15488044/r/il/f34ad1/1384991086/il_794xN.1384991086_603s.jpg",
    "https://i.etsystatic.com/15488044/r/il/ed7696/1384991146/il_794xN.1384991146_i79r.jpg",
    "https://i.etsystatic.com/15488044/r/il/38f9cc/1432268825/il_794xN.1432268825_mz36.jpg",
    "https://i.etsystatic.com/15488044/r/il/a91de0/1432268867/il_794xN.1432268867_g5yp.jpg"

    ],

    ["https://i.etsystatic.com/12974820/r/il/163cef/1438042316/il_fullxfull.1438042316_o5fd.jpg",
    "https://i.etsystatic.com/12974820/r/il/368acc/1510955904/il_794xN.1510955904_kc57.jpg",
    "https://i.etsystatic.com/12974820/r/il/53e4df/1480386641/il_794xN.1480386641_3ph6.jpg",
    "https://i.etsystatic.com/12974820/r/il/f660bb/1480386025/il_794xN.1480386025_gsn6.jpg",
    "https://i.etsystatic.com/12974820/r/il/4ce21d/1433129328/il_794xN.1433129328_p19u.jpg"

    ],

    ["https://i.etsystatic.com/5162299/r/il/cdeb48/1567221375/il_fullxfull.1567221375_384s.jpg",
    "https://i.etsystatic.com/5162299/r/il/314214/1590007831/il_fullxfull.1590007831_g82r.jpg",
    "https://i.etsystatic.com/5162299/r/il/0d5c22/1411568595/il_fullxfull.1411568595_6wdw.jpg"

    ],
    
    ["https://i.etsystatic.com/13219579/r/il/77f0bf/2288251432/il_fullxfull.2288251432_23q3.jpg",
    "https://i.etsystatic.com/13219579/r/il/d0f4e2/2335863607/il_794xN.2335863607_kdv5.jpg",
    "https://i.etsystatic.com/13219579/r/il/41687d/1132018657/il_794xN.1132018657_qq5g.jpg",
    "https://i.etsystatic.com/13219579/r/il/1e855d/1085430316/il_794xN.1085430316_g0uo.jpg"

    ],
    
    ["https://i.etsystatic.com/23989824/r/il/86b169/2394152418/il_fullxfull.2394152418_a73s.jpg",
    "https://i.etsystatic.com/23989824/r/il/ae6b3e/2441776567/il_794xN.2441776567_as2n.jpg",
    "https://i.etsystatic.com/23989824/r/il/84ba9b/2394153006/il_794xN.2394153006_jcpo.jpg",
    "https://i.etsystatic.com/23989824/r/il/84cec3/2394153328/il_794xN.2394153328_c9vw.jpg",
    "https://i.etsystatic.com/23989824/r/il/b75e35/2441777327/il_794xN.2441777327_3cbq.jpg"

    ],
    
    ["https://i.etsystatic.com/18758094/r/il/84a9c4/2318571528/il_fullxfull.2318571528_rxv5.jpg",
    "https://i.etsystatic.com/18758094/r/il/225ead/2318571590/il_794xN.2318571590_t7qn.jpg",
    "https://i.etsystatic.com/18758094/r/il/aec915/2366160649/il_794xN.2366160649_4bgn.jpg"

    ],
    
    ["https://i.etsystatic.com/9005412/r/il/22cb93/2059750717/il_fullxfull.2059750717_es9g.jpg",
    "https://i.etsystatic.com/9005412/r/il/d792fd/2266457735/il_794xN.2266457735_1geo.jpg",
    "https://i.etsystatic.com/9005412/r/il/7e7be2/1857060724/il_794xN.1857060724_5jrc.jpg",
    "https://i.etsystatic.com/9005412/r/il/e87c94/1149978785/il_794xN.1149978785_gqpz.jpg",
    "https://i.etsystatic.com/9005412/r/il/206dab/1149978845/il_794xN.1149978845_f3i2.jpg"

    ],

    ["https://i.etsystatic.com/23641891/r/il/31a06a/2418849583/il_fullxfull.2418849583_9v60.jpg",
    "https://i.etsystatic.com/23641891/r/il/1b7bc8/2418849595/il_fullxfull.2418849595_igr4.jpg",
    "https://i.etsystatic.com/23641891/r/il/236ada/2418849587/il_fullxfull.2418849587_d3e3.jpg",
    "https://i.etsystatic.com/23641891/r/il/d1e08c/2371242442/il_fullxfull.2371242442_nykd.jpg",
    "https://i.etsystatic.com/23641891/r/il/c0173e/2418849581/il_fullxfull.2418849581_5a6a.jpg"

    ],
    
    ["https://i.etsystatic.com/6410880/r/il/26476c/1862829725/il_fullxfull.1862829725_eu64.jpg",
    "https://i.etsystatic.com/6410880/r/il/9b5897/1588035050/il_794xN.1588035050_4053.jpg",
    "https://i.etsystatic.com/6410880/r/il/28fe42/1635474469/il_fullxfull.1635474469_7607.jpg",
    "https://i.etsystatic.com/6410880/r/il/413fc9/1588035374/il_fullxfull.1588035374_lfm9.jpg",
    "https://i.etsystatic.com/6410880/r/il/f471fa/1635475849/il_fullxfull.1635475849_od99.jpg"

    ],
    
    ["https://i.etsystatic.com/6624893/r/il/931e95/2402913459/il_fullxfull.2402913459_q3z2.jpg",
    "https://i.etsystatic.com/6624893/r/il/4b806d/2355318626/il_fullxfull.2355318626_i6ed.jpg",
    "https://i.etsystatic.com/6624893/r/il/9dae1e/2402915729/il_fullxfull.2402915729_f3wu.jpg",
    "https://i.etsystatic.com/6624893/r/il/69132e/2355319300/il_fullxfull.2355319300_20jz.jpg"

    ],
    
    ["https://i.etsystatic.com/5941978/r/il/ea226a/2307333648/il_fullxfull.2307333648_61ap.jpg",
    "https://i.etsystatic.com/5941978/r/il/5caba1/2307333860/il_fullxfull.2307333860_lay5.jpg",
    "https://i.etsystatic.com/5941978/r/il/4fea0c/2307333956/il_fullxfull.2307333956_656n.jpg",
    "https://i.etsystatic.com/5941978/r/il/ec10f9/2307334036/il_fullxfull.2307334036_36tc.jpg",
    "https://i.etsystatic.com/5941978/r/il/4f6337/2307334094/il_fullxfull.2307334094_np9w.jpg",
    "https://i.etsystatic.com/5941978/r/il/b1ab77/827797443/il_794xN.827797443_roh1.jpg"

    ],
    
    ["https://i.etsystatic.com/10204022/r/il/fb2b79/1130332425/il_fullxfull.1130332425_rvw1.jpg",
    "https://i.etsystatic.com/10204022/r/il/573fcc/1083381268/il_794xN.1083381268_c7wq.jpg",
    "https://i.etsystatic.com/10204022/r/il/1e351d/1083391964/il_794xN.1083391964_e4l6.jpg"

    ],
    
    ["https://i.etsystatic.com/11569128/r/il/4e2d4c/1941832210/il_fullxfull.1941832210_ji2j.jpg",
    "https://i.etsystatic.com/11569128/r/il/81b06c/1941832290/il_794xN.1941832290_4llj.jpg",
    "https://i.etsystatic.com/11569128/r/il/16e305/1941832334/il_794xN.1941832334_h49m.jpg",
    "https://i.etsystatic.com/11569128/r/il/fccaf8/1989364393/il_fullxfull.1989364393_gmcx.jpg"

    ],
    
    ["https://i.etsystatic.com/7371176/r/il/48105f/1402631571/il_fullxfull.1402631571_gedq.jpg",
    "https://i.etsystatic.com/7371176/r/il/0a2163/1402639459/il_794xN.1402639459_lq5d.jpg",
    "https://i.etsystatic.com/7371176/r/il/2d3199/1402631663/il_794xN.1402631663_f6y1.jpg",
    "https://i.etsystatic.com/7371176/r/il/3a3819/2008230328/il_794xN.2008230328_aafn.jpg",
    "https://i.etsystatic.com/7371176/r/il/f7a958/1355362542/il_794xN.1355362542_j980.jpg",
    "https://i.etsystatic.com/7371176/r/il/b5bc32/1355362642/il_794xN.1355362642_8n0p.jpg"

    ],
    
    ["https://i.etsystatic.com/10994700/r/il/c03ee8/1916712819/il_fullxfull.1916712819_5iwt.jpg",
    "https://i.etsystatic.com/10994700/r/il/fb976b/1869193070/il_794xN.1869193070_qvty.jpg",
    "https://i.etsystatic.com/10994700/r/il/49fe66/1916712435/il_794xN.1916712435_hstu.jpg",
    "https://i.etsystatic.com/10994700/r/il/367058/1869193084/il_794xN.1869193084_6c1z.jpg"

    ],
    
    ["https://i.etsystatic.com/14484327/r/il/681714/1474113928/il_fullxfull.1474113928_3tyf.jpg",
    "https://i.etsystatic.com/14484327/r/il/681714/1474113928/il_fullxfull.1474113928_3tyf.jpg",
    "https://i.etsystatic.com/14484327/r/il/8cf3c7/1521356173/il_794xN.1521356173_3e9w.jpg"

    ],
    
    ["https://i.etsystatic.com/9350628/r/il/930122/1309436332/il_fullxfull.1309436332_njlw.jpg",
    "https://i.etsystatic.com/9350628/r/il/bdcfac/1811781758/il_794xN.1811781758_pmxx.jpg",
    "https://i.etsystatic.com/9350628/r/il/2d597a/1675788574/il_794xN.1675788574_bu4k.jpg"

    ],
    
    ["https://i.etsystatic.com/9389727/r/il/7381c4/1249006930/il_fullxfull.1249006930_ayyt.jpg",
    "https://i.etsystatic.com/9389727/r/il/127833/1296251083/il_794xN.1296251083_tse2.jpg",
    "https://i.etsystatic.com/9389727/r/il/216a77/1249007036/il_794xN.1249007036_2fxq.jpg",
    "https://i.etsystatic.com/9389727/r/il/0a009d/1296251175/il_794xN.1296251175_f9j0.jpg",
    "https://i.etsystatic.com/9389727/r/il/f33fda/1296251237/il_794xN.1296251237_f3la.jpg"

    ],
    
    ["https://i.etsystatic.com/12240789/r/il/8ef4c2/1914476353/il_fullxfull.1914476353_tji3.jpg",
    "https://i.etsystatic.com/12240789/r/il/fadb53/2092469573/il_794xN.2092469573_qoud.jpg",
    "https://i.etsystatic.com/12240789/r/il/c4eedb/2044868308/il_794xN.2044868308_3yn2.jpg",
    "https://i.etsystatic.com/12240789/r/il/4e647e/1256588987/il_794xN.1256588987_5uv6.jpg"

    ],
    
    ["https://i.etsystatic.com/11114240/r/il/0c7636/1093952263/il_fullxfull.1093952263_t35b.jpg",
    "https://i.etsystatic.com/11114240/r/il/952d07/1047392498/il_794xN.1047392498_hplb.jpg",
    "https://i.etsystatic.com/11114240/r/il/6e5621/1093952139/il_794xN.1093952139_8izb.jpg",
    "https://i.etsystatic.com/11114240/r/il/fa366e/1047392496/il_794xN.1047392496_gx7g.jpg",
    "https://i.etsystatic.com/11114240/r/il/59e041/1093952913/il_794xN.1093952913_nnx6.jpg"

    ],
    
    ["https://i.etsystatic.com/14122215/r/il/ff5ff8/2140163120/il_fullxfull.2140163120_1ivw.jpg",
    "https://i.etsystatic.com/14122215/r/il/217c58/2278249025/il_794xN.2278249025_q7vk.jpg",
    "https://i.etsystatic.com/14122215/r/il/9cde37/2274823795/il_794xN.2274823795_8d3y.jpg",
    "https://i.etsystatic.com/14122215/r/il/5693e6/2387405568/il_794xN.2387405568_o67y.jpg"

    ],
    
    ["https://i.etsystatic.com/15238119/r/il/48d7a6/2206623640/il_794xN.2206623640_dlr8.jpg",
    "https://i.etsystatic.com/15238119/r/il/627e49/2206627552/il_794xN.2206627552_o9vq.jpg",
    "https://i.etsystatic.com/15238119/r/il/cb20b8/2204886166/il_794xN.2204886166_87pg.jpg"

    ],
    
    ["https://i.etsystatic.com/18585293/r/il/64032c/1900389225/il_fullxfull.1900389225_sug9.jpg",
    "https://i.etsystatic.com/18585293/r/il/e84278/1852892440/il_794xN.1852892440_229t.jpg",
    "https://i.etsystatic.com/18585293/r/il/41768c/1852892542/il_794xN.1852892542_3ero.jpg",
    "https://i.etsystatic.com/18585293/r/il/3b4fdc/1900389855/il_794xN.1900389855_kt3f.jpg"

    ],
    
    ["https://i.etsystatic.com/5282912/r/il/4c5bd2/1613520445/il_fullxfull.1613520445_blpm.jpg",
    "https://i.etsystatic.com/5282912/r/il/679166/1613516541/il_794xN.1613516541_9ogq.jpg",
    "https://i.etsystatic.com/5282912/r/il/371a3b/1613516569/il_794xN.1613516569_90zd.jpg",
    "https://i.etsystatic.com/5282912/r/il/a286ea/1916986319/il_794xN.1916986319_hrpd.jpg"

    ],
    
    ["https://i.etsystatic.com/7979419/r/il/9519b2/2289224565/il_fullxfull.2289224565_ahhp.jpg",
    "https://i.etsystatic.com/7979419/r/il/d9961d/2241625562/il_794xN.2241625562_pde2.jpg"

    ],
    
    ["https://i.etsystatic.com/20259922/r/il/7f8109/1931893555/il_fullxfull.1931893555_7ui1.jpg",
    "https://i.etsystatic.com/20259922/r/il/441116/1931893579/il_794xN.1931893579_1ypz.jpg",
    "https://i.etsystatic.com/20259922/r/il/bb919b/1931893577/il_794xN.1931893577_dwrf.jpg"

    ],
    
    ["https://i.etsystatic.com/23303534/r/il/da5088/2341012054/il_fullxfull.2341012054_kqp8.jpg",
    "https://i.etsystatic.com/23303534/r/il/4d491f/2341012128/il_794xN.2341012128_lwh4.jpg"


    ],
    
    ["https://i.etsystatic.com/19164619/r/il/b69cfa/2024192771/il_fullxfull.2024192771_ps8k.jpg",
    "https://i.etsystatic.com/19164619/r/il/abc3e0/1976637564/il_794xN.1976637564_pwie.jpg",
    "https://i.etsystatic.com/19164619/r/il/f8b52a/2148189062/il_794xN.2148189062_z0b4.jpg"

    ],
    
    ["https://i.etsystatic.com/20864906/r/il/f991fe/2004383560/il_794xN.2004383560_bnzl.jpg",
    "https://i.etsystatic.com/20864906/r/il/7f098f/2067903031/il_fullxfull.2067903031_f9k8.jpg"

    ],
    
    ["https://i.etsystatic.com/19283517/r/il/38e4eb/2195652066/il_794xN.2195652066_405g.jpg",
    "https://i.etsystatic.com/19283517/r/il/ad38f7/2243199061/il_794xN.2243199061_mfwf.jpg",
    "https://i.etsystatic.com/19283517/r/il/a333dd/2195651278/il_794xN.2195651278_bndi.jpg",
    "https://i.etsystatic.com/19283517/r/il/85276c/2195651194/il_794xN.2195651194_7uqo.jpg"

    ],
    
    ["https://i.etsystatic.com/13859025/r/il/b7ae33/2110404485/il_794xN.2110404485_jjog.jpg",
    "https://i.etsystatic.com/13859025/r/il/055af5/1673377689/il_fullxfull.1673377689_qi9h.jpg",
    "https://i.etsystatic.com/13859025/r/il/c4e6a2/2433536477/il_794xN.2433536477_o1jv.jpg"


    ],
    
    ["https://i.etsystatic.com/5325754/r/il/3f9c1d/1653458827/il_fullxfull.1653458827_7b5u.jpg",
    "https://i.etsystatic.com/5325754/r/il/a9cb8b/1592455947/il_794xN.1592455947_7smm.jpg",
    "https://i.etsystatic.com/5325754/r/il/1232ae/1653457065/il_794xN.1653457065_n5di.jpg"

    ],
    
    ["https://i.etsystatic.com/22748413/r/il/7fe901/2304836035/il_fullxfull.2304836035_pymh.jpg",
    "https://i.etsystatic.com/22748413/r/il/2f8b83/2304836113/il_794xN.2304836113_pzd6.jpg",
    "https://i.etsystatic.com/22748413/r/il/7a8cbc/2355570524/il_794xN.2355570524_b0bb.jpg"


    ]
    
   
]




users=User.all

(1..9).each do |i|
    category=Category.new(name:cats[i-1])
    category.save!

    (1..4).each do |j|

        # puts images[((i-1)*4)+j]
        product=
        Product.new(
            name: Faker::Commerce.product_name ,
            description: Faker::Lorem.sentence(word_count:100) ,
            price: Faker::Commerce.price,
            photourl: images[((i-1)*4)+j][0],
            # artist_id:7
            artist_id: user1.id,
            category_id: category.id
        )
        product.save!

        product_no=((i-1)*4)+j

        images[product_no].each_with_index do |img,img_idx| 
            
            starting=img.rindex("/")+1
            # file_name='product_'+product_no.to_s+'_'+img_idx.to_s+'_'+img[starting..(img.length-1)]

            file_name='product_'+product_no.to_s+'_'+(img_idx+1).to_s+'.jpg'

            file = open(img)
            product.images.attach(io: file, filename: file_name)

            open('./app/assets/images/products/'+file_name, 'wb') do |webfile|
                webfile << open(img).read
            end
        end


        reviews_num=rand(20)

        (1..reviews_num).each do |k|
            review= Review.new(
                title: "mmm" ,
                body: Faker::Lorem.sentence(word_count:rand(10..100)) ,
                rating: rand(3..5).to_s ,
                item_id: product.id,
                # artist_id:7
                author_id: users[rand(users.length-1)].id
            )
            review.save!
        end




    end
end





# # Faker::Artist.name #=> "Michelangelo"
# #Faker::Name.name      #=> "Christophe Bartell"

# #Faker::Internet.email #=> "kirsten.greenholt@corkeryfisher.info"


# # react-star-ratings --save-dev
# # npm install react-alice-carousel --save-dev
# https://www.npmjs.com/package/react-alice-carousel