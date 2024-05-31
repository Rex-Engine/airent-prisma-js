// entity imports
import { FilePageModel } from './file-page-type';
import { FilePageChunkModel } from './file-page-chunk-type';
// airent imports
import { Select } from 'airent';

// entity imports
import { AliasedFile as PrismaAliasedFile } from '@prisma/client';
import { FileType as PrismaFileType } from '@prisma/client';
import { FilePageFieldRequest, FilePageResponse } from './file-page-type';
import { FilePageChunkFieldRequest, FilePageChunkResponse } from './file-page-chunk-type';

/** structs */

export type AliasedFileModel = PrismaAliasedFile & { pages?: FilePageModel[]; chunks?: FilePageChunkModel[] };

export type AliasedFileFieldRequest = {
  size?: boolean;
  type?: boolean;
  chunks?: FilePageChunkFieldRequest;
};

export type AliasedFileResponse = {
  size?: number;
  type?: PrismaFileType;
  chunks?: FilePageChunkResponse[];
};

export type SelectedAliasedFileResponse<S extends AliasedFileFieldRequest> = Select<AliasedFileResponse, S>;
