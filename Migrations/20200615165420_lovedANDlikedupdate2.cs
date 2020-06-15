using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class lovedANDlikedupdate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "loved",
                table: "like",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<int>(
                name: "liked",
                table: "like",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "loved",
                table: "like",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<bool>(
                name: "liked",
                table: "like",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
