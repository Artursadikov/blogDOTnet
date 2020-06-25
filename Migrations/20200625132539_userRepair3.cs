using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class userRepair3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "eamil",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "email",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "eamil",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
