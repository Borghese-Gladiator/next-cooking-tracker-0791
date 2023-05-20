export const baseURL = process.env.NODE_ENV === 'production' ? 'vercel' : "http://localhost:3000";

export const darkMode = {
  
}

export const cookingHistory = [
  {
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    thumbnail: './images/gyoza.jpg',
    name: 'gyoza / 煎饺',
    learning: [
      {
      },
    ]
  },
  {
    createdAt: '2023-05-16',
    updatedAt: '2023-05-16',
    thumbnail: './vercel.svg',
    name: 'oyakodon',
    learning: [
      {
      },
    ]
  }
]
/*
SUCCESS
Okyakodon - dashi, soy sauce, cooking sake, mirin, sugar, chicken, onions, scallions, egg
- When I did it a second time, I stir fried the chicken and added a little bit of soy sauce. I need to be careful with how long I cook it so the meat flavor does not go out into the sauce.

Okonomiyaki - pork belly or other pork, water, flour, cabbage, scallions, frozen shrimp, frozen vegetables, fresh yakisoba noodles, Okonomiyaki sauce (or ketchup + worcestershire + sugar), Kewpie Mayo, Bonito Flakes, scallions garnish

Sundubu - oil, onion, garlic, pork belly, kimchi, stock (dried anchovies, dried kelp (and 30 min)) , salt/sugar, soft tofu, hot pepper mixture (gochugaru, sesame oil), egg, scallions
  - need stock for good umami flavor instead of just chicken bouillon
  - https://www.maangchi.com/recipe/sundubu-jjigae

Tonkatsu Curry Rice
- curry - java spicy curry, Vermont mild curry, chicken, carrots, potatoes, water
- katsu - pork loin, flour, egg, panko, (tonkatsu sauce)

Miso Soup - red dashi powder, chicken bouillon, silken tofu, bonito flakes, wakame, red miso

麻婆豆腐 - pork shredded, silken tofu, 豆瓣酱, 蒜蓉辣椒酱 (or pepper), garlic, ginger

京酱肉丝 - pork slices, 甜面酱, scallions, garlic, ginger 

甘いじゃが芋 - potatoes, soy sauce, sugar, mirin, water

banana bread - bananas, butter, baking soda, salt, sugar, egg, vanilla extract, flour

FAILED
Gyoza
- Filling - need to add water (打水, have to do it 3 times) OR use fatty pork
- Harvest garlic chives from our garden outside 
- Make wrapper flatter 
- when pan frying, make sure to add extra oil so the bottom doesn't stick
Pita Bread
- cut the bread along the middle so I can actually put thigns
- heat up the bread to make it more pliable
Salad Burrito
- heat up the tortilla to make it more pliable
- buy bigger tortillas to make actual burrito (or pack less food to fit it in)
Spaghetti
- did not add enough sauce
- sun dried tomatoes were not cut small enough (need to dice them instead of into slices)
Hamburg Steak - steak - carrots, onions, shiitake mushrooms, panko, milk, meat mixture (beef + pork), nutmeg, flour, red wine (or red wine vinegar), ketchup, worcestershire sauce, honey, butter, cherry tomatoes, mushrooms
- dice mushrooms and carrots smaller (takes more time but worth)
- need more panko soaked in soy milk 
- careful with the sauce (added too much honey), add less and then more based on the flavor. Also, buy bigger bottles of red wine since 700 mL is more than 2 cups.
- too much portion size (got 2 lb of beef, I only need like 1/2 lb max

Banana Bread - bananas, butter, baking soda, salt, sugar, egg, vanilla extract, flour
- need 3 bananas

Green Shakshukas - garlic, onions, tomatillo, canned pinto beans, spices (cumin, chipotle, coriander seeds), frozen spinach, eggs, tortilla chips, salsa
- tomatillos are sour so I had to add sugar to mitigate my Chinese spinach, tomatillo, lime mixture
- cilantro does not blend well at all

Yam Tempura
- yams too wet and not soft + flour not much flavor => bake yams before `frying
- peeling yams is smart and water + egg + flour coating was super easy to make

Classic Chili
- beans had no flavor (need to cook them separate and then add in)
- soup was good - chili powder, cumin, oregano, basil, salt, pepper, butter
- meat was pretty good - soy sauce, corn starch, salt, pepper

Dan Dan Mian
- chili oil - bought wrong chili pepper flakes for chili oil (next time buy chili oil?)
- noodles are good with sesame oil
*/

/*
UPCOMING DISHES
QUEUE
- Tamagoyaki
- noriben
- Taiwanese Oyster Omelette (蠔烙煎) 
- Beef Noodle Soup 牛肉面
- yakitori

Backlog
- risotto
- paella
- jambalaya 
- Shitake mushroom
- Dumplings 水饺
- Oatmeal Raisin Cookies
- Dango (mitarashi, sanshoku)
- Ramen ラメン
- Karaage 唐揚げ
- Omelette Rice
- Taiyaki 鯛焼き
- Egg Fried Rice 蛋炒饭
- Korean Dan Dan Mian
- Oatmeal Banana Bread  - bananas (https://www.youtube.com/shorts/HAfo4-k7Cp8)
- wonton soup
- bruschetta - French bread, garlic, olive oil, salt, tomato, fresh mozzarella, honey ham 
- 卤肉饭
- 地瓜稀饭
- Panzanella (Italian Bread Salad) - cubed, hardened bread, tomatoes, cucumbers, onions, peppers, basil, olive oil, red wine vinegar, salt, and pepper.
- fish tacos
- Miso Tamago
- chilaquiles
- Hunan Beef - https://www.youtube.com/watch?v=w1XuKyQ9lRI
- doner kebab
- Shawarma 
- swedish meatballs 
- Kimchi Spaghetti - spaghetti, nori sheets, eggs, 
- Pomodoro spaghetti and meatballs
- Teriyaki Chicken
- gnocchi pasta - Gnocchi, sausage, red pepper, garlic, broccoli, Parmesan 
- Sichuan style rice noodles - https://youtube.com/shorts/8t0Ddy8QQTE?feature=share 
- Joloff Rice
- Pupusa
- Nasi Goreng (Indonesia fried rice)
- Ful Medames
- Baleadas
- Fried rice
- Chili Oil - oil, chili flakes, garlic, onion, ginger, Sichuan peppercorn, paprika
- Mongolian Beef - https://thewoksoflife.com/mongolian-beef-recipe/
- Sukiyaki
- Huevos Rancheros - tortillas, bell peppers, jalapenos, eggs, tomatoes, onions, canned beans, Monterey jack cheese 
- Smash burger - onions, tomatoes, lettuce, American cheese, ground beef, ketchup, Mayonnaise, hot sauce, pickles, burger buns, salt, pepper
- Butter chicken - yogurt, chicken thighs, garam marsala, smoked paprika, cayenne pepper, salt, garlic, ginger, butter, onions, canned tomatoes , cream
- Malai Kofta
- Refried beans - oregano, actual beans, serrano pepper, onions, garlic,  chipotle powder, lard, queso fresco
- stir fried noodles
- Chicken parmesan
- Spaghetti con vongole
- Seaweed fritters
- Mac n Cheese - macaroni, bread crumbs, shredded cheddar cheese 
  - Bechamel sauce - butter, flour, milk
- Adobo
- Ube
- Balut 
- Yakisoba
- 铁锅炖大鹅
- YOOK BANG - pancake by adding flour to preserved turnip roles, chinese sausage, water chesnuts with soy sauce, salt, sesame oil, (& msg)
- beef rendang
- trancam (salad)
- zongzi
- youfan
- rice-stuffed chicken soup
- 饭团
- 汤圆
- purple rice congee.
- 年糕 
- noriben

*/