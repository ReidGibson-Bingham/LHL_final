# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

user0 = User.create(id: 0, name: 'No Player', email: "none", password: "none")
user1 = User.create({name: 'Marvin the Martian', email: "marvinmartian@looneytunes.com", password: "password"})
user2 = User.create({name: 'Porky Pig', email: "porkypig@looneytunes.com", password: "password"})
user3 = User.create({name: 'Tweety Bird', email: "tweetybird@looneytunes.com", password: "password"})
user4 = User.create({name: 'Yosemite Sam', email: "yosemitesam@looneytunes.com", password: "password"})


# User.create([{name: 'Marvin the Martian', email: "marvinmartian@looneytunes.com", password: "password"}, {name: 'Porky Pig', email: "porkypig@looneytunes.com", password: "password"}, {name: 'Tweety Bird', email: "tweetybird@looneytunes.com", password: "password"}, {name: 'Yosemite Sam', email: "yosemitesam@looneytunes.com", password: "password"}])

puts "created #{User.count} users"
# v to remove from database v to pass in clean state
Text.destroy_all 
Text.connection.execute('ALTER SEQUENCE texts_id_seq RESTART WITH 1')

Text.create!([
  {difficulty: 'child', content: 'f d j k s l a f d j k s l a f d j k s l a f d j k s l a f d j k s l a f d j k s l a '},
  {difficulty: 'easy', content: 'Hmm
  You might think Im crazy
  The way Ive been cravin
  If I put it quite plainly
  Just gimme them babies
  So, what you doing tonight?
  Better say, Doin you right (yeah)
  Watchin movies, but we aint seen a thing tonight (yeah)
  I dont wanna keep you up (you up)
  But show me, can you keep it up? (It up)
  Cause then Ill have to keep you up
  Shit, maybe Ima keep you up, boy
  Ive been drinking coffee (Ive been drinking coffee)
  And Ive been eating healthy (and Ive been eating healthy)
  Know I keep it squeaky, yeah (know I keep it squeaky)
  Saving up my energy (yeah, yeah, saving up my energy)'},
  {difficulty: 'medium', content: '
  We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.'},
  {difficulty: 'hard', content: 'Merchant of Syracuse, plead no more;
  I am not partial to infringe our laws:
  The enmity and discord which of late
  Sprung from the rancorous outrage of your duke
  To merchants, our well-dealing countrymen,
  Who wanting guilders to redeem their lives
  Have seald his rigorous statutes with their bloods,
  Excludes all pity from our threatening looks.
  For, since the mortal and intestine jars
  Twixt thy seditious countrymen and us,
  It hath in solemn synods been decreed
  Both by the Syracusians and ourselves,
  To admit no traffic to our adverse towns Nay, more,
  If any born at Ephesus be seen
  At any Syracusian marts and fairs;
  Again: if any Syracusian born
  Come to the bay of Ephesus, he dies,
  His goods confiscate to the dukes dispose,
  Unless a thousand marks be levied,
  To quit the penalty and to ransom him.
  Thy substance, valued at the highest rate,
  Cannot amount unto a hundred marks;
  Therefore by law thou art condemned to die.'}
])

puts "created #{Text.count} texts"


Game.destroy_all 
Game.connection.execute('ALTER SEQUENCE games_id_seq RESTART WITH 1')
#game_datetime: Time.now, 
# user1 = User.find_or_create_by! name: 'Marvin the Martian'
# user1.games.create!([{player1_id: user1.id, player2_id: 6, text_id: 5}])
#  Game.create([{user_id: 1, text_id: 1, error_count: 10, total_time: 5000},  {user_id: 2, text_id: 1, error_count: 11, total_time: 10000},  {user_id: 3, text_id: 2, error_count: 12, total_time: 11000}])

Game.connection.execute('INSERT INTO games (user_id, text_id, error_count, total_time, created_at, 
updated_at) values (1, 1, 10, 5000, NOW(), NOW())')
Game.connection.execute('INSERT INTO games (user_id, text_id, error_count, total_time, created_at, updated_at) values (1, 1, 11, 10000, NOW(), NOW())')
Game.connection.execute('INSERT INTO games (user_id, text_id, error_count, total_time, created_at, updated_at) values (2, 2, 12, 11000, NOW(), NOW())')

puts "created #{Game.count} games"

