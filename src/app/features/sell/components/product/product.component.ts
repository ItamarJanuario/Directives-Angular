import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title = "Eletronicos";

  productInd = false;

  produtos: Array<Product> = [
    {
      descricao: "Mouse gamer Razer Viper",
      preco: 160,
      quantidade: 21,
      imagem: "https://ae01.alicdn.com/kf/H4ff5f1e7f1f9442288fc70fc9105ef87q/Razer-viper-mini-vers-o-61-gramas-leve-computador-port-til-cabo-sinfonia-rgb-e-sports.jpg_Q90.jpg_.webp",
      disponivel: true
    },

    {
      descricao: "Mousepad TonyBoy tropa do bensa",
      preco: 1500,
      quantidade: 3,
      imagem: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/929/213/products/mousepad-xten-cloth-control_31-6ae5dc85b96c1b29cb16367000004906-640-0.jpg",
      disponivel: true
    },

    {
      descricao: "Cadeira Herman Miller",
      preco: 12500,
      quantidade: 0,
      imagem: "https://hermanmiller.vteximg.com.br/arquivos/ids/158847-907-680/aeron-grafite-B-AER1B23DW-0003_1.jpg?v=636905220049400000",
      disponivel: false
    },

    {
      descricao: "Headset Fallen Morcego",
      preco: 710,
      quantidade: 30,
      imagem: "https://i.zst.com.br/thumbs/12/1d/36/1303688113.jpg",
      disponivel: true
    },

    {
      descricao: "Monitor Gamer com led e TUDO",
      preco: 980,
      quantidade: 122,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOODpcmrdOkeoHPQhoAw6UNWYujtyaKpotg&usqp=CAU",
      disponivel: true
    },

    {
      descricao: "Garrafa de água Gamer",
      preco: 1620,
      quantidade: 0,
      imagem: "https://images.tcdn.com.br/img/img_prod/584235/rolha_luminaria_led_para_decorar_garrafas_438980669_1_20181019181549.jpg",
      disponivel: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  comprar() {
    alert("Produto comprado com sucesso!");
  }

}
