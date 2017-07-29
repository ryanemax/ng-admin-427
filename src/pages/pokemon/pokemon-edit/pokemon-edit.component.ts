import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {

  infoPokemon:any = null;

  pokemonInfo:any = {
          "index": null,
          "name": null,
          "romIndex": null,
          "attributes":null
        };

  getStudentSubscribe:any;

  attributesList:Array<any>;

  attachedAttributesList:any;

  attribute:any;

  attachedbute:any;

  addattribute:any;

//   getPokemon(id: any): Promise<any> {      
//       let p = new Promise((resolve,reject)=>{ 
//        this.infoPokemon = id;
//        let pokemon = this.poService.pokemonList.find(item=>item.id == id) 
//        if(pokemon){ 
//          resolve(pokemon) 
//        }else{ 
//          reject("student not found") 
//        } 
//      }) 

//      console.log(p);
//      return p 

//  }

 updatePokemon(){

   if(this.infoPokemon == "new"){
     this.pokemonInfo.attributes = [this.attribute];
   }else{
     console.log(this.attribute);
     if(this.attribute != null){
       this.pokemonInfo.attributes.shift();
       this.pokemonInfo.attributes.unshift(this.attribute);
     }
   }

   if(this.addattribute != null){
     this.pokemonInfo.attributes.push(this.addattribute);
   }

   this.poService.savePokemon(this.pokemonInfo).subscribe(data=>{ 
       this.location.back(); 
     }) 

 }

 backPokemon(){
   this.location.back();
 }

 ngOnInit() { 
     this.getStudentSubscribe = this.route.params.subscribe(params=>{ 
       this.infoPokemon = params['id'];

       if(this.infoPokemon == "new"){
         this.poService.getPokemonsbyUrl().subscribe(data=>{
            this.pokemonInfo = {
                "index": data.length + 1,
                "name": null,
                "romIndex": null,
                "attributes": null
              }
          });

          this.poService.getPokemonAttributesListbyUrl().subscribe(data=>{
            this.attributesList = data;
            this.attachedAttributesList = data;
          })
       }else {
         this.poService.getPokemonbyIndex(this.infoPokemon).subscribe(data=>{
          this.pokemonInfo = data;
          this.poService.getPokemonAttributesListbyUrl().subscribe(data=>{
            this.attributesList = data;
            this.attributesList.forEach(item=>{
              if(item.attribute == this.pokemonInfo.attributes[0]){
                this.attributesList.splice(this.attributesList.indexOf(item),1);
              }
            })

            this.attachedAttributesList = data;
            this.attachedAttributesList.forEach(item=>{
              this.pokemonInfo.attributes.forEach(temp=>{
                if(item.attribute == temp){
                  this.attributesList.splice(this.attributesList.indexOf(item),1);
                }
              })
            })
          })
        });
       }
     })

   } 

  constructor(private poService: PokemonService, private route: ActivatedRoute, 
              private location: Location ) { 
    
  }

}


