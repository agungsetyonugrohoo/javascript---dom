/*
DOM Tree => Representasi elemen-elemen HTML di dalam browser dengan representasinya berbentuk 'tree' atau pohon

Representasi DOM divisualisasikan sebagai simpul (node)

Tipe-tipe node :
- Elemen
- Attribute
- Text
- CDdata Section
- Entity Reference
- Entity
- Processing Instruction
- Comment
- Document
- Document Type
- Document Fragment
- Notation

NodeList vs HTMLCollection
- Keduanya merupakan kumpulan node
- Struktur datanya mirip array
- nodeList dapat berisi node appaun, sedangkan HTMLCollection harus berisi elemen HTML
- HTMLCollection bersifat live sedangkan nodeList tidak

Struktur Hierarki DOM Tree
- Root Node
    - node yang menjadi sumber dari semua node lain di dalam DOM
    - defaultnya : document
- Parent Node
    - node yang berada 1 tingkat diatas node yang lain
    - contoh : body adalah parent dari h1,p,p,div dan a
- Child Node
    - nodenya berada 1 tingkat dibawah node yang lain
    - h1 adalah child dari body
    - tidak terlalu peduli terhadap tipe nodenya sehingga bisa termasuk ke dalam element node, text node dsb
    - children => lebih spesifik, child node yang bertipe HTML
    - siblings => child node yang memiliki parent yang sama
    - descendant => keturunan, termasuk anak, cucu dsb
*/