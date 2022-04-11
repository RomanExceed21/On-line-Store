import { DeleteAdminDto } from './dto/deleteAdmin.dto';
import { BlockAdminDto } from './dto/blockAdmin.dto';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { SuperadminService } from './superadmin.service';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';

@Controller('superadmin')
export class SuperadminController {
	constructor(private superadminService: SuperadminService) {}

	@Get('getAllAdmins')
	getAllAdmins() {
		return this.superadminService.getAllAdmins()
	}

	@Post('createAdmin')
	createAdmin(@Body() createAdminDto: CreateAdminDto) {
		return this.superadminService.createAdmin(createAdminDto)
	}

	@Post('blockAdmin')
	blockAdmin(@Body() blockAdminDto: BlockAdminDto) {
		return this.superadminService.blockAdmin(blockAdminDto)
	}

	@Delete('deleteAdmin')
	deleteAdmin(@Query() deleteAdminDto: DeleteAdminDto) {
		return this.superadminService.deleteAdmin(deleteAdminDto)
	}
}
