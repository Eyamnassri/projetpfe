import { Injectable } from '@nestjs/common';
import { AuthUser, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
  constructor(     
    @InjectRepository(User)//1ere
    private readonly userRepository: Repository<User>,

  ){
    
  }
  async create(createUserDto: CreateUserDto) {
    let useruserCreate:CreateUserDto=createUserDto
    useruserCreate.resToken=this.createToken().toString()
    // useruserCreate.password= await String((this.hashPassword( useruserCreate.password)).toString())

    useruserCreate.password=  await this.hashPassword(useruserCreate.password);

  console.log("rtype",typeof((this.hashPassword( useruserCreate.password).toString())))
    return this.userRepository.save(useruserCreate)

    // return 'This action adds a new user';
  }
 createToken(){
    let allwedChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token ="";4
    for (let i = 0; i < 64; i++) {
      token += allwedChar.charAt(Math.floor(Math.random() * allwedChar.length));
    }
    console.log("token", token)
    return token;
  } //hash password
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // Number of salt rounds to use for hashing
    let hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("hashpassword", typeof hashedPassword);
    return hashedPassword;
}
async findEmail(email:string){
  return this.userRepository.findOne({where:{email:email}})
}
  async authlogin(authLogin:AuthUser){
    const newUser = await this.userRepository.findOne({  where: { email:authLogin.email } });
   
    if (!newUser) {
      throw new Error('User not found');
    }
    else{
    const isPasswordValid = await bcrypt.compare(authLogin.password, (newUser.password).toString());
     if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return newUser
    }
  }
  findAll() {
   return this.userRepository.findAndCount()
  }
  async findOneByUsername(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({where:{email:email}}); 
  }

  findOne(id: number) {
 return this.userRepository.findOne({where:{id:id}})
  }

  
  findOnBy(text: string) {
    return this.userRepository.findOne({where:{email:text}})
     }
   
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    // const { password, ...userData } = updateUserDto; // Exclude password from update

    // if (password) {
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
    //   userData.password = hashedPassword;
    // }
    let userData=updateUserDto

    this.userRepository.merge(user, userData);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
  
}
