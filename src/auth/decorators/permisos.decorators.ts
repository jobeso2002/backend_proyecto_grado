import { SetMetadata } from "@nestjs/common"
import { Permison } from "../../common/enums/permiso.enum"

export const PERMISION_KEY = 'permison'

export const Permision = (...permisions: Permison[]) => SetMetadata(PERMISION_KEY, permisions) 