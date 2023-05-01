const routes=[
    {
        method:'GET',
        path: '/hello/{name?}', //tanda ? jika user hanya ketik hello saja maka akan muncul name=stranger sebagai default
        handler:(request,h)=>{
            const {name="stranger"} =request.params; //name=stranger nilai default
            const {lang}=request.query;
            if(lang==='id'){ //hello/belaekaputri?lang=id
                return `hai, ${name}!`;
            }
            return `Hello,${name}`;
        }
    },
    /*
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    },*/
    {
    method:'GET',
    path: '/',
    handler:(request,h)=>{
        return 'Home Page';
    }
    },
    {
    method:'*',
    path: '/',
    handler:(request,h)=>{
        return 'Halaman tidak dapat diakses dengan method tersebut';
    },
   },
   {
    method:'GET',
    path: '/about',
    handler:(request,h)=>{
        return 'About Page';
    },
   },
   {
    method:'*', /* route dapat diakses menggunakan seluruh method yang ada pada HTTP. */
    path: '/about',
    handler:(request,h)=>{
        return 'Halaman tidak dapat diakses dengan method ';
    },
   },
   {
    method: '*',
    path: '/{any*}',
   /*untuk menangani permintaan masuk pada path yang belum Anda tentukan. Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi*/
    handler: (request, h) => {
        return 'Halaman tidak ditemukan';
    },
   }
   ];
   module.exports=routes;
//routes