using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class lovedANDliked : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "liked",
                table: "like",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "loved",
                table: "like",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "liked",
                table: "like");

            migrationBuilder.DropColumn(
                name: "loved",
                table: "like");
        }
    }
}
