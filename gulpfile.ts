import { src, dest } from "gulp";
import * as schemaBundle from 'gulp-jsonschema-bundle';

export function resolveSchema(){
    return src('src/schemas/*.json')
    .pipe( schemaBundle())
    .pipe(dest('out/schemas'));
}
