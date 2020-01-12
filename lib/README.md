Is intended for code that can run as-is.


The diference in using `lib` vs `src` should be:

- `lib` if ou can use node's `require()` directly.
- `src` if you can not, or the file must otherwise be manipulated before use.

If you are committing copies of module/files that are from other systems, use of subfolder `vendors`.