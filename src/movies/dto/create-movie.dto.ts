import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  //읽기 전용으로 만들것이다.
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  //유효성 검사의 옵션으로 들어가보면 Each true 가 있다.모든 요소를 하나씩 검사 한다는 의미 이다.
  readonly genres?: string[];
}
