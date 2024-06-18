import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { DemandeModule } from './demande/demande.module';
import { ArticleModule } from './article/article.module';
import { SpecificationsModule } from './specifications/specifications.module';
// import { AuthModule } from './auth/auth.module';
import { CommisionsModule } from './commisions/commisions.module';
import { AppelOffreModule } from './appel-offre/appel-offre.module';
import { EtatModule } from './etat/etat.module';

@Module({
  imports: [
    // config database 
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username:'postgres',
        password: 'postgres',
        database: "gestionAchat",
        autoLoadEntities: true,
        synchronize: true,
        // synchronize: false,
     
      }),
  
        }),
        ConfigModule.forRoot(),
    UserModule,
    ProductModule,
    DemandeModule,
    ArticleModule,
    SpecificationsModule,
  
    CommisionsModule,
    AppelOffreModule,
    EtatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
