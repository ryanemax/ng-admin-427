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

  attributesList:any;

  attribute:any;

  getPokemon(id: any): Promise<any> {      
      let p = new Promise((resolve,reject)=>{ 
       this.infoPokemon = id;
       let pokemon = this.poService.pokemonList.find(item=>item.id == id) 
       if(pokemon){ 
         resolve(pokemon) 
       }else{ 
         reject("student not found") 
       } 
     }) 

     console.log(p);
     return p 

 }

 updatePokemon(){
   console.log("updatePokemon")
   console.log(this.pokemonInfo)
   if(this.infoPokemon == "new"){
     this.pokemonInfo.attributes = [this.attribute];
   }else{
     this.pokemonInfo.attributes.push(this.attribute);
   }
   
   console.log(this.pokemonInfo.attribute);

   this.poService.savePokemon(this.pokemonInfo).subscribe(data=>{ 
       console.log(data) 
       this.location.back(); 
     }) 

 }

 ngOnInit() { 
     this.getStudentSubscribe = this.route.params.subscribe(params=>{ 
       this.infoPokemon = params['id'];
       console.log(params);

       if(this.infoPokemon == "new"){
         this.poService.getPokemonsbyUrl().subscribe(data=>{
            this.pokemonInfo = {
                "index": data.length + 1,
                "name": null,
                "romIndex": null,
                "attributes": null
              }
          });
       }else {
         this.poService.getPokemonbyIndex(this.infoPokemon).subscribe(data=>{
          console.log('*********');
          console.log(data);
          this.pokemonInfo = data;
          this.pokemonInfo.attributes = [];
        });
       }
     })

   } 

  constructor(private poService: PokemonService, private route: ActivatedRoute, 
              private location: Location ) { 

      this.attributesList = poService.getattributesList();
    
  } }




