using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class delLikeTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "likes");

            migrationBuilder.AddColumn<int>(
                name: "like",
                table: "Posts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "liked",
                table: "Posts",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "love",
                table: "Posts",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "loved",
                table: "Posts",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "like",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "liked",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "love",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "loved",
                table: "Posts");

            migrationBuilder.CreateTable(
                name: "likes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PostId = table.Column<int>(type: "int", nullable: true),
                    like = table.Column<int>(type: "int", nullable: false),
                    liked = table.Column<int>(type: "int", nullable: false),
                    love = table.Column<int>(type: "int", nullable: false),
                    loved = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_likes", x => x.id);
                    table.ForeignKey(
                        name: "FK_likes_Posts_PostId",
                        column: x => x.PostId,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_likes_PostId",
                table: "likes",
                column: "PostId");
        }
    }
}
