import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/food';
import { Like } from '../models/like';
import { Comment } from '../models/Comment';
import { User } from '../models/user';
import { FoodService } from '../services/food.service';
import { LikeService } from '../services/like.service';
import { LoginService } from '../services/login.service';
import { PanierService } from '../services/panier.service';
import { UserService } from '../services/user.service';
import { CommentService } from '../services/comment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Panier } from '../models/panier';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.css']
})
export class DetailFoodComponent implements OnInit {
id:number;
food:Food;
listusers: User[];
like:Like;
listlikes: Like[];
foodlikes: Like[];
email:string;
password:string;
comment:Comment;
listComment: Comment[];
foodcomments:Comment[];
CommentForm:FormGroup;
date=new Date();
nbrecomments=0;
nbrelikes=0;
test:boolean;
listpanier:Panier[];
  constructor(private service: ActivatedRoute, private serviceFood: FoodService, private servicepanier: PanierService,
    private loginservice: LoginService, private userservice:UserService, private likeservice: LikeService, private router: Router
    ,private serviceComment: CommentService) { }

  ngOnInit(): void {

    this.serviceComment.getComment().subscribe((data: Comment[]) => this.listComment = data);
    this.id = this.service.snapshot.params.id;
    this.serviceFood.searchFood(this.id).subscribe((data: Food) => this.food = data);
    this.userservice.getUsers().subscribe((data: User[]) => this.listusers = data);
    this.like = new Like();
    this.likeservice.getLike().subscribe((data: Like[]) => this.listlikes = data);
    this.email=this.loginservice.getUser().email;

   this.CommentForm = new FormGroup({
    body:new FormControl('',[Validators.required]),
  });
  this.comment = new Comment();

  this.serviceComment.searchCommentFood(this.id).subscribe(data =>
      {
        this.foodcomments = data;
        this.nbrecomments=this.foodcomments.length;
        console.log(this.nbrecomments);
      } );

      this.test=false;
      this.likeservice.searchlikesFood(this.id).subscribe(data =>
        {
          this.foodlikes = data;
          this.nbrelikes=this.foodlikes.length;
          console.log(this.nbrelikes);
          for (let i of data){
            if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){
              this.test=true;
              break;
            }
          }
          console.log(this.test);
        } );
  
  }

/***************************************************like**************************************/

  add(){
    for (let i of this.listusers){
      if ((i.email === this.loginservice.getUser().email) && (i.password === this.loginservice.getUser().password)){
        this.like.user = i;
        this.like.food = this.food;
        this.likeservice.postLike(this.like).subscribe(
         data=> {console.log(data);},
         error=>console.error(error)
    );
        break;
      }
    }
    this.nbrelikes++;
      this.test=true;
  }

  supplike(){
    this.likeservice.searchlikesFood(this.id).subscribe(data =>
      {
        this.foodlikes = data;
        for (let i of data){
          if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){
            this.likeservice.deleteLike(i.id).subscribe(
              () => data = data.filter(like => like.id != i.id)  
            );
            break;
          }
        }
      } );
      this.nbrelikes--;
      this.test=false;
  }


/******************************************Comments*************************************/

  sup(id){
    this.serviceComment.deleteComent(id).subscribe(
      () => this.listComment = this.listComment.filter(comment => comment.id != id)
      
    );
    
        this.nbrecomments--;
        
  }

  get body(){
    return this.CommentForm.get('body');
  }
  Add_Comment(){
    for (let i of this.listusers){
      if ((i.email === this.loginservice.getUser().email) && (i.password === this.loginservice.getUser().password)){
        this.comment.user = i;
        this.comment.food= this.food;
        this.comment.date= this.date;
        this.comment.body= this.CommentForm.value.body;
        this.serviceComment.postComent(this.comment).subscribe( 
         data=> {console.log(data); this.listComment.push( this.comment) },
         error=>console.error(error)
    );
        break;
      }
    }
    this.nbrecomments++;
  }

  /********************************************************************************************/


  add_order(){
    this.servicepanier.getP().subscribe(data =>
          {
            this.listpanier = data;
            for (let i of this.listpanier){
              if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){  
                i.food.push(this.food);
                //console.log(this.food);
                this.servicepanier.updateP(i).subscribe(
                  data=> {console.log(data); this.router.navigate(['/your_panier']); },
                  error=>console.error(error)
                );
              }
            }
          } );
  }

}
