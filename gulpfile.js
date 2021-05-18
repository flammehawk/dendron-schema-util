"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSchema = void 0;
const gulp_1 = require("gulp");
const schemaBundle = require("gulp-jsonschema-bundle");
function resolveSchema() {
    return gulp_1.src('src/schemas/*.json')
        .pipe(schemaBundle())
        .pipe(gulp_1.dest('out/schemas'));
}
exports.resolveSchema = resolveSchema;
//# sourceMappingURL=gulpfile.js.map