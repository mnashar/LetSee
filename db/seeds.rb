require 'faker'
# 
# user1=User.new(name:"Marwa",email:"msn@aucegypt.edu")
# user1.password="mmmmmm"

# user1.save!



images=[
    "https://i.etsystatic.com/18585293/r/il/501ac2/2203272268/il_1588xN.2203272268_q46p.jpg",
    "https://i.etsystatic.com/18585293/r/il/64032c/1900389225/il_fullxfull.1900389225_sug9.jpg",
    "https://i.etsystatic.com/9272834/r/il/0530d2/1374189943/il_fullxfull.1374189943_e415.jpg",
    "https://i.etsystatic.com/10204022/r/il/fb2b79/1130332425/il_1588xN.1130332425_rvw1.jpg",
    "https://i.etsystatic.com/6332216/r/il/4e13e2/1517419938/il_1588xN.1517419938_e4xa.jpg",
    "https://i.etsystatic.com/7571615/r/il/772270/1987973475/il_1588xN.1987973475_jgde.jpg",
    "https://i.etsystatic.com/10994700/r/il/c03ee8/1916712819/il_1588xN.1916712819_5iwt.jpg",
    "https://i.etsystatic.com/10158348/r/il/ee6c43/2299319859/il_1588xN.2299319859_5vud.jpg",
    "https://i.etsystatic.com/11791292/r/il/3b6e9d/2118655593/il_1588xN.2118655593_4zbv.jpg",
    "https://i.etsystatic.com/19655942/r/il/97833c/2297682585/il_1588xN.2297682585_rly7.jpg",
    "https://i.etsystatic.com/5223966/r/il/1090af/2051944999/il_fullxfull.2051944999_qb3o.jpg",
    "https://i.etsystatic.com/12324116/r/il/e022e8/1071235415/il_1588xN.1071235415_kd7o.jpg",
    "https://i.etsystatic.com/22675868/r/il/c4f74f/2283767949/il_1588xN.2283767949_6l8h.jpg",
    "https://i.etsystatic.com/20790202/r/il/164bf7/2110155643/il_1588xN.2110155643_dbbd.jpg",
    "https://i.etsystatic.com/8446099/r/il/daf6f7/867498314/il_1588xN.867498314_30co.jpg",
    "https://i.etsystatic.com/17098314/r/il/050cbe/1992632938/il_fullxfull.1992632938_gqh2.jpg",
    "https://i.etsystatic.com/19151170/r/il/455a21/1902811372/il_1588xN.1902811372_a1hi.jpg",
    "https://i.etsystatic.com/18638700/r/il/492d08/2125332696/il_1588xN.2125332696_6y0z.jpg",
    "https://i.etsystatic.com/5246514/r/il/1040c8/879509239/il_1588xN.879509239_hz4t.jpg",
    "https://i.etsystatic.com/5246514/r/il/dbf652/1175378382/il_1588xN.1175378382_6su0.jpg",
    "https://i.etsystatic.com/5943877/r/il/b400dc/2163145424/il_1588xN.2163145424_ityx.jpg",
    "https://i.etsystatic.com/7605991/r/il/a230c6/1652955739/il_1588xN.1652955739_c6dh.jpg",
    "https://i.etsystatic.com/7605991/r/il/2f1f9d/1772666490/il_1588xN.1772666490_c9o8.jpg",
    "https://i.etsystatic.com/7371176/r/il/fb4831/2119092340/il_1588xN.2119092340_3tjp.jpg",
    "https://i.etsystatic.com/7371176/r/il/5d58bd/1087967784/il_1588xN.1087967784_h303.jpg",
    "https://i.etsystatic.com/9363211/r/il/752ec6/2304483875/il_1588xN.2304483875_ijan.jpg",
    "https://i.etsystatic.com/10396120/r/il/9e264e/1993031320/il_1588xN.1993031320_g2ee.jpg",
    "https://i.etsystatic.com/22348282/r/il/970cd5/2284371093/il_1588xN.2284371093_sagm.jpg",
    "https://i.etsystatic.com/17556283/r/il/feb23b/2221879763/il_1588xN.2221879763_m162.jpg",
    "https://i.etsystatic.com/21117462/r/il/4469f0/2011573806/il_1588xN.2011573806_gf88.jpg",
    "https://i.etsystatic.com/9234998/r/il/8ec5b2/2000181504/il_1588xN.2000181504_3t6f.jpg",
    "https://i.etsystatic.com/6903082/r/il/d69bf5/2101041584/il_1588xN.2101041584_lftj.jpg",
    "https://i.etsystatic.com/6903082/r/il/417991/1825938328/il_1588xN.1825938328_4gzl.jpg",
    "https://i.etsystatic.com/11821796/r/il/0b3609/2208415008/il_1588xN.2208415008_1ssj.jpg",
    "https://i.etsystatic.com/6789376/r/il/7fc841/1061243032/il_1588xN.1061243032_wsvs.jpg",
    "https://i.etsystatic.com/13286268/r/il/af30bc/1875173426/il_1588xN.1875173426_ehq1.jpg",
    "https://i.etsystatic.com/9425087/r/il/fbbb61/2256687325/il_1588xN.2256687325_hbgm.jpg"
]

(0...36).each do |i|
    Product.create!([{
        name: Faker::Commerce.product_name ,
        description: Faker::Lorem.sentence(word_count:100) ,
        price: Faker::Commerce.price,
        photourl: images[i],
        artist_id:7
        # artist_id: user1.id
    }])
end

# photo="https://i.etsystatic.com/18585293/r/il/501ac2/2203272268/il_1588xN.2203272268_q46p.jpg"

# UPDATE products SET photourl = ‘2203272268_q46p.jpg’ WHERE id=1;

# id: 16,
#   name: "Mediocre Aluminum Computer",
#   description: "Voluptatem non perferendis doloremque.",
#   photourl: "https://i.etsystatic.com/17098314/r/il/050cbe/1992632938/il_fullxfull.1992632938_gqh2.jpg",
#   price: 0.9321e2,
#   artist_id: 1