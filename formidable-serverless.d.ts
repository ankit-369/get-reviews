declare module 'formidable-serverless' {
    import { IncomingMessage } from 'http';
  
    export interface Fields {
      [key: string]: string | string[];
    }
  
    export interface Files {
      [key: string]: {
        size: number;
        path: string;
        name: string;
        type: string;
        lastModifiedDate?: Date;
        hash?: string;
        [key: string]: any;
      } | {
        size: number;
        path: string;
        name: string;
        type: string;
        lastModifiedDate?: Date;
        hash?: string;
        [key: string]: any;
      }[];
    }
  
    export interface Options {
      encoding?: string;
      uploadDir?: string;
      keepExtensions?: boolean;
      maxFileSize?: number;
      maxFieldsSize?: number;
      maxFields?: number;
      hash?: boolean | 'sha1' | 'md5';
      multiples?: boolean;
    }
  
    export class IncomingForm {
      constructor(options?: Options);
      parse(req: IncomingMessage, callback: (err: any, fields: Fields, files: Files) => void): void;
    }
  }